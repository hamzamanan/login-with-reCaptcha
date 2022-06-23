const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
});

const Login = mongoose.model.Schema || mongoose.model("users", loginSchema);

module.exports = Login;
