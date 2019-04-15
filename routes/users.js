const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  res.json({ msg: "sucess" });
});

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      res.status(400).json({ email: "Email already exists" });
    } else {
      const password = bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          return hash;
        });
      });
      const newUSer = User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        password: password
      });
      newUSer
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    }
  });
});
module.exports = router;
