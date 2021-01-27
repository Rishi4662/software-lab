const mongoose = require("mongoose");

const employee = mongoose.Schema({
  name: String,
  email: String,
  address: String,
});

module.exports = mongoose.model("employee", employee);
