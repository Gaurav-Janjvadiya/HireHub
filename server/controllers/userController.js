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
    res.status(200).json({
      token,
      user: {
        id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.json({ error });
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    const isUser = await bcrypt.compare(password, user.password);
    if (isUser) {
      const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
        expiresIn: "7d",
      });
      res.status(200).json({
        token,
        user: {
          id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    } else {
      res.json({ error: "User not found" });
    }
  } catch (error) {
    res.json({ error });
  }
};
