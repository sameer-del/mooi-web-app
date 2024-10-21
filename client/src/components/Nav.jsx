import React, { useContext } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { UserContext } from "../../context/userContex";

const Nav = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="w-full h-[100px] bg-slate-500 flex justify-between items-center ">
      <div className="ml-8 text-[30px]">
        <h1>Sameer</h1>
      </div>
      <div className="flex items-center justify-center">
        <h3 className="m-5 text-[20px]">{user.name}</h3>
        <AccountCircle
          sx={{
            fontSize: "50px",
            marginRight: "100px",
            color: "black",
          }}
        />
      </div>
    </nav>
  );
};

export default Nav;
