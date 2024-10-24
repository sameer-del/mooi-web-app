const mongoose = require("mongoose");

const data = new mongoose.Schema({
  f1: { type: String, required: true },
  a1: { type: String, required: true },
  f2: { type: String, required: true },
  a2: { type: String, required: true },
  f3: { type: String, required: true },
  a3: { type: String, required: true },
  f4: { type: String, required: true },
  a4: { type: String, required: true },
});

const userData = mongoose.model("mooi", data);
module.exports = userData;
