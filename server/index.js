const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));
mongoose
  .connect(
    "mongodb+srv://billybutcher654:11QeO6vJcYRNjgsJ@cluster0.y9ies.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("database connection established"))
  .catch((err) => console.log("database not connection", err));
app.use("/", require("./routes/route.js"));

app.listen(port, () => {
  console.log("listening on port" + " " + port);
});
