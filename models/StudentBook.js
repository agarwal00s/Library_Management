const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Student = require("./Student.js");
const Book = require("./Book.js");
const StudentBooksSchema = new Schema({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: Student
  },
  bookId: [
    {
      type: Schema.Types.ObjectId,
      ref: Book
    }
  ]
});

module.exports = StudentBook = mongoose.model(
  "studentBooks",
  StudentBooksSchema
);
