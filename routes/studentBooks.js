const express = require("express");
const router = express.Router();
const StudentBook = require("../models/StudentBook.js");

router.post("/issueBook", (req, res) => {
  const newStudentBooks = StudentBook({
    studentId: req.body.studentId,
    bookId: req.body.bookId
  });
  newStudentBooks
    .save()
    .then(studentBook => res.json(studentBook))
    .catch(err => console.log(err));
});

module.exports = router;
