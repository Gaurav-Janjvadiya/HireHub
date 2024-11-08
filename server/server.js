require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");

connectDB(process.env.DB_URL);

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/user", userRouter);

app.listen(8000, () => {
  console.log("server is started on http://localhost:8000");
});
