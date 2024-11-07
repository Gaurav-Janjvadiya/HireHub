const mongoose = require("mongoose");

const connectDB = async (dbUrl) => {
  try {
    await mongoose.connect(dbUrl);
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
