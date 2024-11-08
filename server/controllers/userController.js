const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.signup = async (req, res) => {
  const { email, fullname, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ fullname, email, password: hashedPassword });
    const newUser = await user.save();
    const token = jwt.sign({ userId: newUser._id }, process.env.SECRET, {
      expiresIn: 60 * 60 * 24 * 7,
    });
    res.status(200).json({ token });
  } catch (error) {
    res.json({ error });
  }
};
