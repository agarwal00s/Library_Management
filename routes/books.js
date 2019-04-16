const express = require("express");
const router = express.Router();
const Book = require("../models/Book.js");

router.post("/addBook", (req, res) => {
  Book.findOne({ isbn: req.body.isbn }).then(book => {
    if (book) res.json({ msg: "Book already existes" });
    else {
      const newBook = Book({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        copies: req.body.copies
      });
      newBook
        .save()
        .then(book => res.json(book))
        .catch(err => console.log(err));
    }
  });
});

router.post("/searchBook", (req, res) => {
  Book.find({ isbn: req.body.isbn }).then(books => {
    if (books) res.json(books);
    else res.json({ msg: "No Books found with the given ISBN" });
  });
});

module.exports = router;
