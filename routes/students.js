const express = require("express");
const router = express.Router();
const Student = require("../models/Student.js");
const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  res.json({ msg: "sucess" });
});

router.post("/register", (req, res) => {
  Student.findOne({ email: req.body.email }).then(student => {
    if (student) {
      res.status(400).json({ email: "Student with this Email already exists" });
    } else {
      const password = bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          return hash;
        });
      });
      const newStudent = Student({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        password: password
      });
      newStudent
        .save()
        .then(student => res.json(student))
        .catch(err => console.log(err));
    }
  });
});
module.exports = router;
