const { body } = require("express-validator");
const { User } = require("../models");

const messageValidation = () => [
  body("author", "Incorrect author of message! (This email have to be in DB)")
    .isEmail()
    .bail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });
      if (!user) throw new Error("This email does't exist in DB");
    }),
  body("name", "Incorrect name! (max 20 characters)").exists().isLength({
    max: 20,
    min: 1,
  }),
  body("surname", "Incorrect surname! (max 20 characters)").exists().isLength({
    max: 20,
    min: 1,
  }),
  body("phone", "Incorrect phone number!").isMobilePhone(),
  body("email", "Incorrect email!").isEmail(),
  body("category", "Incorrect category").isString(),
];

module.exports = messageValidation;
