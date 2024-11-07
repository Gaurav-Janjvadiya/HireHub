const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

connectDB(process.env.DB_URL);

//middleware
app.use(cors());

app.listen(8000, () => {
  console.log("server is started on http://localhost:8000");
});
