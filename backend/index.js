// index.js

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const zodSchema = require("./auth_validator.js");
const userRoutes = require("./router/user.js");
const protectedRoutes = require("./router/proctedRoute.js");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);
app.use("/protectedRoutes", protectedRoutes);
app.use("/", (req, res) => {
  res.send("This is home page");
});

async function ConnectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/paytmProd");
    console.log("Connected to mongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
  }
}

ConnectDB();

app.listen(5000, () => {
  console.log("server started on port 5000");
});
