const { body } = require("express-validator");
const { User } = require("../models");

const registerValidation = () => [
  body("email", "Incorrect email")
    .normalizeEmail()
    .isEmail()
    .bail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });
      if (user) throw new Error("This email are already is use'");
    }),
  body(
    "password",
    "Your password must be at least 6 to 20 characters"
  ).isLength({ min: 5, max: 20 }),
  body("passwordCheck").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password confirmation does not match password");
    }
    return true;
  }),
  body("displayName", "Your name must be max 20 charackters")
    .isLength({
      max: 20,
    })
    .notEmpty(),
];

module.exports = registerValidation;
