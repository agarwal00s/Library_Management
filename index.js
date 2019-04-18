const express = require("express");
//students route
const students = require("./routes/students.js");
//books route
const books = require("./routes/books.js");
//StudentBooks route
const studentBooks = require("./routes/studentBooks.js");
const admins = require("./routes/admin.js");
//body-parser for reading the req body
const bodyParser = require("body-parser");

//For mLab
const mongoose = require("mongoose");

//For Local MongoDb
/* const mongoClient = require("mongodb").MongoClient; */

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
app.use("/students", students);
app.use("/books", books);
app.use("/studentBooks", studentBooks);
app.use("/admin", admins);
//Listening to port 5000
app.listen(5000, () => {
  console.log("Server Running");
});
