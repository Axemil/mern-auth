const { compare } = require("bcryptjs");
const { body } = require("express-validator");
const { User } = require("../models");

const loginValidation = () => [
  body("email", "Incorrect email")
    .normalizeEmail()
    .isEmail()
    .bail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });
      if (!user) throw new Error("This email does't exist in DB");
    }),
  body("password", "Your password must be at least 6 to 20 characters")
    .isLength({ min: 5, max: 20 })
    .bail()
    .custom(async (value, { req }) => {
      const { email } = req.body;
      const user = await User.findOne({ email });
      if (!user) throw new Error("This password is incorrect");

      const isMatch = await compare(value, user.password);
      if (!isMatch) throw new Error("Incorrect password");
    }),
];

module.exports = loginValidation;
