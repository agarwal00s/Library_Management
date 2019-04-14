const express = require("express");
const app = express();
app.get("/", (req, res) => {
  console.log("Index Page");
  res.send("Hello Sourav");
});
app.listen(5000, () => {
  console.log("Server Running");
});
