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
const cors = require("cors");

const path = require("path");

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
app.use(cors());
//body-parser middleware

//to support json encoded bodies
app.use(bodyParser.json());
//to support url encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/students", students);
app.use("/books", books);
app.use("/studentBooks", studentBooks);
app.use("/admin", admins);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//Listening to port 5000

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Running");
});
