const registerValidation = require("./register.middleware");
const loginValidation = require("./login.middleware");
const autorizeValidation = require("./authorize.middleware");
const checkAuth = require("./checkAuth.middleware");

module.exports = {
  registerValidation,
  loginValidation,
  autorizeValidation,
  checkAuth,
};
