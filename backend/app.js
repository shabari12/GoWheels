const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const connectTob = require("./db/db");
const app = express();
const connectTodb = require("./db/db");
const userRoutes = require("./routes/user.routes");
connectTodb();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, ress) => {
  ress.send("Hello World");
});
app.use("/users", userRoutes);

module.exports = app;
