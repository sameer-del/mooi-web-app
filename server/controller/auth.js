const userModel = require("../models/model.js");
const people = require("../models/model.js");
const { hashPassword, comparePassword } = require("../helpers/help.js");

const jwt = require("jsonwebtoken");
const newRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({
        error: "enter a username",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "enter a valid password",
      });
    }
    const match = await people.findOne({ email });
    if (match) {
      return res.json({ error: "user already exits" });
    }
    const newHashPassword = await hashPassword(password);
    const newUser = await people.create({
      name,
      email,
      password: newHashPassword,
    });
    return res.json(newUser);
  } catch (error) {
    console.error(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userhas = await people.findOne({ email });
    if (!userhas) {
      return res.json({ error: "user not found please register" });
    }

    const match = await comparePassword(password, userhas.password);
    if (match) {
      jwt.sign(
        { email: userhas.email, id: userhas.id, name: userhas.name },
        process.env.JWT_TOKEN,
        {},
        (err, token) => {
          if (err) throw err;
          // Set token as an HttpOnly cookie
          res.cookie("token", token, { httpOnly: true }).json(userhas);
        }
      );
    } else {
      return res.json({
        error: "password is incorrect",
      });
    }
  } catch (error) {
    console.error(error);
  }
};
const getProfile = (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  jwt.verify(token, process.env.JWT_TOKEN, {}, (err, user) => {
    if (err) {
      console.error("JWT Verification Error:", err);
      return res.status(403).json({ error: "Token verification failed" });
    }
    res.json(user); // Send the user data if token verification succeeds
  });
};

module.exports = { newRegister, loginUser, getProfile };
