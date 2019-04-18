const mongoose = require("mongoose");
const schema = mongoose.Schema;
const StudentSchema = new schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  gender: {
    type: String
  },
  password: {
    type: String
  }
});
module.exports = Student = mongoose.model("students", StudentSchema);
