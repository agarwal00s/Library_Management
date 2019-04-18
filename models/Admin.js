const mongoose = require("mongoose");
const schema = mongoose.Schema;
const AdminSchema = new schema({
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
module.exports = Admin = mongoose.model("admins", AdminSchema);
