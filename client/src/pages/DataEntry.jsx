import React, { useState } from "react";
import Preview from "../components/Preview";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DataEntry = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState({
    f1: "",
    a1: "",
    f2: "",
    a2: "",
    f3: "",
    a3: "",
    f4: "",
    a4: "",
  });

  const submitMethod = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/data", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/dataview");
    } catch (error) {
      console.log(error);
    }
  };
  const handlechange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    calculateTotal({ ...formData, [e.target.name]: e.target.value });
  };
  const calculateTotal = (data) => {
    const amountKeys = ["a1", "a2", "a3", "a4"];
    const total = amountKeys.reduce((sum, key) => {
      const amount = parseFloat(data[key]) || 0; // Parse float or default to 0
      return sum + amount; // Accumulate total
    }, 0);
    setTotal(total); // Set total in state
  };

  return (
    <form
      className="w-full h-[100vh] bg-slate-400 border-black "
      onSubmit={submitMethod}
    >
      <table className="dataContainer">
        <tr>
          <th>family name</th>
          <th>amount</th>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              placeholder="family name"
              name="f1"
              value={formData.f1}
              onChange={handlechange}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="Amount"
              name="a1"
              value={formData.a1}
              onChange={handlechange}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              placeholder="family name"
              name="f2"
              value={formData.f2}
              onChange={handlechange}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="Amount"
              name="a2"
              value={formData.a2}
              onChange={handlechange}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              placeholder="family name"
              name="f3"
              value={formData.f3}
              onChange={handlechange}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="Amount"
              name="a3"
              value={formData.a3}
              onChange={handlechange}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              placeholder="family name"
              name="f4"
              value={formData.f4}
              onChange={handlechange}
            />
          </td>
          <td>
            <input
              type="text"
              placeholder="Amount"
              name="a4"
              value={formData.a4}
              onChange={handlechange}
            />
          </td>
        </tr>
      </table>

      <Preview total={total} />
    </form>
  );
};

export default DataEntry;
