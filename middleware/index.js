const registerValidation = require("./register.middleware");
const loginValidation = require("./login.middleware");
const autorizeValidation = require("./authorize.middleware");
const checkAuth = require("./checkAuth.middleware");
const contactValidation = require("./contact.middleware");

module.exports = {
  registerValidation,
  loginValidation,
  autorizeValidation,
  checkAuth,
  contactValidation,
};
