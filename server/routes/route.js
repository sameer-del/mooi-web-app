const cors = require("cors");
const express = require("express");
const router = express.Router();
const { newRegister ,loginUser,getProfile} = require("../controller/auth.js");

router.use(
    cors({
      credentials: true,
      origin: "http://localhost:5173",
    })
  );
  
  
  router.post("/register", newRegister);
  router.post("/login", loginUser);
  router.get("/profile", getProfile);

module.exports = router;
