const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  dob: { type: Date },
  state: { type: String },
  gender: { type: String },
  location: { type: String },
  pimage: { type: String, reqired: true },
  rdoc: { type: String, required: true },
});
module.exports = mongoose.model("candidateProfile", candidateSchema);
