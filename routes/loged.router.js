const router = require("express").Router();
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

module.exports = router;
