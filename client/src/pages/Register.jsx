import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import { Toaster, toast } from "react-hot-toast";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, Input } from "@mui/material";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  //usestate to store the data
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  //handling submit
  const registerUser = async (e) => {
    e.preventDefault();
    //destructing the data and store it in data
    const { name, email, password } = data;
    //try catch block
    try {
      //using axios we send the data to the server
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      //this data error is handled in backend the object error is called
      if (data.error) {
        toast.error(data.error);
      } else {
        //to set the inputs clear
        setData({});
        //this toast send the toast message
        toast.success("user is created");
        //this navigate use to navigate the register to login page
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register h-[100vh] bg-slate-400 text-black flex items-center justify-center flex-col font-primary">
      <div className="card w-[450px] flex justify-center items-center h-[400px]">
        <form
          className=" flex flex-col gap-[50px] w-full h-full m-auto justify-center items-center "
          onSubmit={registerUser}
        >
          <Input
            type="name"
            name="name"
            placeholder="user Name"
            variant="outlined"
            value={data.name}
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />

          <Input
            type="email"
            name="email"
            placeholder="email"
            variant="outlined"
            value={data.email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />

          <Input
            type="password"
            name="password"
            placeholder="password"
            variant="outlined"
            className="text-start"
            value={data.password}
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />

          <button type="submit" className="bg-white ">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
