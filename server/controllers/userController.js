const User = require("../models/userModel");

module.exports.signup = async (req, res) => {
  console.log(req.body);
  res.send({ message: "Hi!" });
};
