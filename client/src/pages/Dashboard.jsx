import React from "react";
import Nav from "../components/Nav";
import DataEntry from "./DataEntry";

const Dashboard = () => {
  return (
    <div className="h-full w-full flex flex-col ">
      <Nav />
      <DataEntry />
    </div>
  );
};

export default Dashboard;
