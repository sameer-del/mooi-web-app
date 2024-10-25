import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home h-[100vh]  text-black flex items-center justify-center ">
      <div className="card w-[40%] h-[350px] flex items-center justify-center flex-col ">
        <h1 className=" text-[35px] lg:text-[45px] font-bold text-white capitalize ">
          welcome to my
        </h1>
        <h2 className=" text-[40px] lg:text-[65px] font-bold capitalize">
          mooi web app
        </h2>
        <div className="lg:w-[300px] h-10 flex justify-center  mt-10 gap-8">
          <button>
            <Link to="/register">register</Link>
          </button>
          <button>
            <Link to="/login">login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
