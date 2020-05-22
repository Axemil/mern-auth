const { header } = require("express-validator");

const authorizeValidation = () => [
  header("x-auth-token", "No token authorization denide")
    .exists()
    .notEmpty()
    .bail()
    .isJWT(),
];

module.exports = authorizeValidation;
