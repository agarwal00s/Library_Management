const mongoose = require("mongoose");
const schema = mongoose.Schema;
const BookSchema = new schema({
  isbn: {
    type: String
  },
  title: {
    type: String
  },
  author: {
    type: String
  },
  genre: {
    type: String
  },
  copies: {
    type: Number
  }
});
module.exports = Book = mongoose.model("books", BookSchema);
