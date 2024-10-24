import Home from "../src/pages/Home";
import Register from "../src/pages/Register";
import Dashboard from "../src/pages/Dashboard";
import Login from "../src/pages/Login";
import axios from "axios";
import DataEntry from "../src/pages/DataEntry";
import DataView from "../src/pages/DataView";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContex";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Toaster position=" right top" toastOptions={{ duration: 5000 }} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/data-entry" element={<DataEntry />} />
          <Route path="/dataview" element={<DataView />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
