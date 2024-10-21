import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" h-[100vh] bg-slate-400 text-black flex items-center justify-center flex-col">
      <h1 className=" text-[45px] lg:text-[85px] font-bold">welcome to my</h1>
      <h2 className=" text-[40px] lg:text-[65px] font-bold">mooi web app</h2>
      <div className="lg:w-[300px] h-10 flex justify-around  mt-10">
        <button className="px-10 bg-slate-950 text-teal-200 rounded mx-7">
          <Link to="/register">register</Link>
        </button>
        <button className="px-10 bg-slate-950 text-teal-200 rounded mx-7">
          <Link to="/login">login</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
