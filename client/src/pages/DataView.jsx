import React, { useEffect, useState } from "react";
import axios from "axios";

const DataView = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/latest"); // Adjust the endpoint as necessary
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Check if data is still loading
  if (!data) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  return (
    <div className="data h-[100vh] flex justify-center items-center flex-col">
      <h1 className="font text-[35px] text-white mb-5 ">Data view</h1>
      <table class="container">
        <thead>
          <tr>
            <th>
              <h1>Family Name</h1>
            </th>
            <th>
              <h1>Amount</h1>
            </th>
          </tr>
        </thead>
        <tbody className="text-white">
          <tr>
            <td>{data.f1}</td>
            <td>{data.a1}</td>
          </tr>
          <tr>
            <td>{data.f2}</td>
            <td>{data.a2}</td>
          </tr>
          <tr>
            <td>{data.f3}</td>
            <td>{data.a3}</td>
          </tr>
          <tr>
            <td>{data.f4}</td>
            <td>{data.a4}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataView;
