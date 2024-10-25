import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import { toast } from "react-hot-toast";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, Input } from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../context/userContex";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  //handling submit
  const loginUser = async (e) => {
    e.preventDefault();
    //destructing the data and store it in data

    const { email, password } = data;
    //try catch block
    try {
      //using axios we send the data to the server
      const { data } = await axios.post("/login", {
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
        toast.success("login successful");
        //this navigate use to navigate the register to login page
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className=" register h-[100vh] bg-slate-400 text-black flex items-center justify-center flex-col">
      <div className="card w-[450px] flex justify-center items-center h-[400px]">
        <form
          className="flex flex-col gap-[50px] w-full h-full m-auto justify-center items-center"
          onSubmit={loginUser}
        >
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
          {/*  <Button
            variant="contained"
            color="primary"
            type="submit"
            className=" py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md"
          >
            submit
          </Button> */}
          <button type="submit" className="bg-white ">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
