const express = require("express");
const users = require("./routes/users.js");
//For mLab
const mongoose = require("mongoose");

//For Local MongoDb
const mongoClient = require("mongodb").MongoClient;

//Connecting mLab DB
const db1 = require("./config/keys.js").mongoURI;
mongoose
  .connect(db1, { useNewUrlParser: true })
  .then(console.log("Database mLab Connected"))
  .catch(err => console.log(err));

//Connecting Local DB
const db2 = require("./config/keys.js").localDBURI;
mongoClient
  .connect(db2, { useNewUrlParser: true })
  .then(console.log("Database local Connected"))
  .catch(err => console.log(err));

//Routing
const app = express();
app.get("/", (req, res) => {
  res.send("Hello Sourav");
});
app.use("/users", users);

//Listening to port 5000
app.listen(5000, () => {
  console.log("Server Running");
});
