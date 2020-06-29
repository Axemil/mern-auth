const registerValidation = require("./register.middleware");
const loginValidation = require("./login.middleware");
const autorizeValidation = require("./authorize.middleware");
const checkAuth = require("./checkAuth.middleware");
const messageValidation = require("./message.middleware");

module.exports = {
  registerValidation,
  loginValidation,
  autorizeValidation,
  checkAuth,
  messageValidation
};
