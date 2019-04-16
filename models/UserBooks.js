const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User.js");
const Book = require("./Book.js");
const UserBooksSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: User
  },
  bookId: [
    {
      type: Schema.Types.ObjectId,
      ref: Book
    }
  ]
});

module.exports = UserBook = mongoose.model("userBooks", UserBooksSchema);
