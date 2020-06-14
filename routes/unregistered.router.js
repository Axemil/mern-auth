const router = require("express").Router();
const { genSalt, hash } = require("bcryptjs");
const { validationResult } = require("express-validator");
const { sign } = require("jsonwebtoken");
const config = require("config");
const { User } = require("../models");
const { registerValidation, loginValidation } = require("../middleware");

router.post("/register", registerValidation(), async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        result: "Error!",
        errors: errors.array(),
        message: "Incorrect data",
      });
    }

    const { email, password } = req.body;
    let { displayName } = req.body;
    if (displayName.length === 0) displayName = email;

    const salt = await genSalt();
    const passwordHash = await hash(password, salt);

    const newUser = new User({
      email,
      password: passwordHash,
      displayName,
    });
    const saveUser = await newUser.save();
    res.json({
      result: "Success!",
      saveUser,
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.post("/login", loginValidation(), async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        result: "Error!",
        errors: errors.array(),
        message: "Incorrect data",
      });
    }

    const { email } = req.body;

    const user = await User.findOne({ email });

    const token = sign({ id: user._id }, config.get("JWT_Secret"));

    res.send({
      result: "Success!",
      token,
      user: {
        id: user._id,
        displayName: user.displayName,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
