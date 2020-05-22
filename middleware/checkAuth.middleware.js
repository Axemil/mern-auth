const { verify } = require("jsonwebtoken");
const config = require("config");
const { validationResult } = require("express-validator");

const checkAuth = (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Incorrect data",
      });
    }
    const token = req.header("x-auth-token");

    const verified = verify(token, config.get("JWT_Secret"));
    if (!verified) throw new Error("Token authorize faild");

    req.user = verified.id;

    next();
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = checkAuth;
