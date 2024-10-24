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
    <div className="">
      <h1 className="text-[35px]">Data view</h1>
      <table class="container">
  <thead>
    <tr>
      <th><h1>Sites</h1></th>
      <th><h1>Views</h1></th>
      <th><h1>Clicks</h1></th>
      <th><h1>Average</h1></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Google</td>
      <td>9518</td>
      <td>6369</td>
      <td>01:32:50</td>
    </tr>
    <tr>
      <td>Twitter</td>
      <td>7326</td>
      <td>10437</td>
      <td>00:51:22</td>
    </tr>
    <tr>
      <td>Amazon</td>
      <td>4162</td>
      <td>5327</td>
      <td>00:24:34</td>
    </tr>
    <tr>
      <td>LinkedIn</td>
      <td>3654</td>
      <td>2961</td>
      <td>00:12:10</td>
    </tr>
    <tr>
      <td>CodePen</td>
      <td>2002</td>
      <td>4135</td>
      <td>00:46:19</td>
    </tr>
    <tr>
      <td>GitHub</td>
      <td>4623</td>
      <td>3486</td>
      <td>00:31:52</td>
    </tr>
  </tbody>
</table>
    </div>
  );
};

export default DataView;
