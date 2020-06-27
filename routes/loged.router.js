const router = require("express").Router();
const { validationResult } = require("express-validator");
const { verify, decode } = require("jsonwebtoken");
const config = require("config");
const { User } = require("../models");
const { autorizeValidation, checkAuth } = require("../middleware");

router.delete("/delete", autorizeValidation(), checkAuth, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/check", autorizeValidation(), async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        result: "Error!",
        errors: errors.array(),
        message: "Incorrect data",
      });
    }
    const token = req.header("x-auth-token");

    const verified = verify(token, config.get("JWT_Secret"));

    if (!verified) res.json({ login: false });
    else res.json({ login: true, user: decode(token) });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
