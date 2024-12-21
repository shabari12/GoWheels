const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const connectTob = require("./db/db");
const app = express();
const connectTodb = require("./db/db");
const userRoutes = require("./routes/user.routes");
const cookieParser = require("cookie-parser");
connectTodb();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get("/", (req, ress) => {
  ress.send("Hello World");
});
app.use(bodyParser.json());
app.use("/users", userRoutes);

module.exports = app;
