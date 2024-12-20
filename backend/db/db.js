const mongoose = require("mongoose");

function connectTodb() {
  mongoose
    .connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,  // Ensure MongoDB connection uses new URL parser and topology engine
    })
    .then(() => console.log("Connected to db"))
    .catch((err) => console.log(err));
}

module.exports = connectTodb;
