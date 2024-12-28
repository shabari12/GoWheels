const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const connectTodb = require("./db/db");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const app = express();
const mapsRoutes = require("./routes/maps.routes");
const riderRoutes = require("./routes/ride.routes");
connectTodb();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);
app.use("/maps", mapsRoutes);
app.use("/rides", riderRoutes);
app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
