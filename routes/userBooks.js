const express = require("express");
const router = express.Router();
const UserBook = require("../models/UserBooks.js");

router.post("/issueBook", (req, res) => {
  const newUserBooks = UserBook({
    userId: req.body.userId,
    bookId: req.body.bookId
  });
  newUserBooks
    .save()
    .then(userBook => res.json(userBook))
    .catch(err => console.log(err));
});

module.exports = router;
