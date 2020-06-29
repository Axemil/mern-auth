const { body } = require("express-validator");

const messageValidation = () => [
  body("text", "Incorrect text of message!")
    .exists()
    .bail()
    .notEmpty()
    .bail()
    .isString(),
  body("author", "Incorrect text of message!")
    .exists()
    .bail()
    .notEmpty()
    .bail()
    .isString(),
];

module.exports = messageValidation;
