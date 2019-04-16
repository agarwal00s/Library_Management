const express = require("express");
//users route
const users = require("./routes/users.js");
//books route
const books = require("./routes/books.js");
//body-parser for reading the req body
const bodyParser = require("body-parser");

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
/* const db2 = require("./config/keys.js").localDBURI;
mongoClient
  .connect(db2, { useNewUrlParser: true })
  .then(console.log("Database local Connected"))
  .catch(err => console.log(err)); */

//Routing
const app = express();

//body-parser middleware

//to support json encoded bodies
app.use(bodyParser.json());
//to support url encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello Sourav");
});
app.use("/users", users);
app.use("/books", books);

//Listening to port 5000
app.listen(5000, () => {
  console.log("Server Running");
});
