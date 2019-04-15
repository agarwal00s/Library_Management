const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({
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
module.exports = User = mongoose.model("users", UserSchema);
