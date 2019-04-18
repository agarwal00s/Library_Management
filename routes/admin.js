const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin.js");
const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  res.json({ msg: "sucess" });
});

router.post("/register", (req, res) => {
  Admin.findOne({ email: req.body.email }).then(admin => {
    if (admin) {
      res.status(400).json({ email: "Admin with this Email already exists" });
    } else {
      const newAdmin = Admin({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          newAdmin.password = hash;
        });
      });
      newAdmin
        .save()
        .then(admin => res.json(admin))
        .catch(err => console.log(err));
    }
  });
});

router.post("/login", (req, res) => {
  const loginAdmin = {
    email: req.body.email,
    password: req.body.password
  };
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      loginAdmin.password = hash;
    });
  });
  Admin.findOne({
    $and: [
      { email: { $eq: loginAdmin.email } },
      { password: { $eq: loginAdmin.password } }
    ]
  }).then(admin => {
    if (admin) res.status(200).json(admin);
    else res.status(400).json({ msg: "Invalid UserId/Password" });
  });
});
module.exports = router;
