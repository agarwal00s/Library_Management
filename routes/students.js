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
      const newStudent = Student({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          newStudent.password = hash;
        });
      });
      newStudent
        .save()
        .then(student => res.json(student))
        .catch(err => console.log(err));
    }
  });
});

router.post("/login", (req, res) => {
  const loginStudent = {
    email: req.body.email,
    password: req.body.password
  };
  var a;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      loginStudent.password = hash;
    });
  });
  Student.findOne({
    $and: [
      { email: { $eq: loginStudent.email } },
      { password: { $eq: loginStudent.password } }
    ]
  }).then(student => {
    if (student) res.status(200).json(student);
    else res.status(400).json({ msg: "Invalid UserId/Password" });
  });
});
module.exports = router;
