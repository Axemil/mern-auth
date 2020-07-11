const router = require("express").Router();
const { validationResult } = require("express-validator");
const { verify, decode } = require("jsonwebtoken");
const config = require("config");
const { User, Contact } = require("../models");
const {
  autorizeValidation,
  checkAuth,
  contactValidation,
} = require("../middleware");

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
    else {
      const { email } = decode(token);
      const findedUser = await User.findOne({ email });
      res.json({ login: true, user: findedUser });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/post-contact", contactValidation(), async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        result: "Error!",
        errors: errors.array(),
        message: "Incorrect data",
      });
    }
    const newContact = new Contact({
      ...req.body,
    });
    const saveContact = await newContact.save();
    res.json(saveContact);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/get-contact", async (req, res) => {
  try {
    const author = req.header("author");
    if (!author) res.status(500).json({ error: "No id!" });
    const contacts = await Contact.find({ author });
    res.json(contacts);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/add_new-categorie", async (req, res) => {
  try {
    const { email, categories } = req.body;
    const updatedUser = await User.findOneAndUpdate({ email }, { categories });
    if (updatedUser) {
      res.json({ updatedUser });
    } else res.status(400).json({ error: "User didn't updated" });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/get-one-contact", async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        result: "Error!",
        errors: errors.array(),
        message: "Incorrect data",
      });
    }
    const { userId } = req.body;
    const contact = await Contact.findById(userId);
    if (contact) res.json(contact);
    else res.json({ error: "error" });
  } catch (error) {
    res.status(500).json(error);
  }
});

// router.post("/post-message", messageValidation(), async (req, res) => {
//   try {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       return res.status(400).json({
//         result: "Error!",
//         errors: errors.array(),
//         message: "Incorrect data",
//       });
//     }
//     const { text, author } = req.body;

// const newMessage = new Message({
//   text,
//   author,
// });
// const saveMessage = await newMessage.save();
// res.json({ saveMessage });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// router.get("/get-messages", async (req, res) => {
//   try {
//     const sort = req.header("sort") || "addedAt";
//     const sortValue = req.header("sortValue") || "desc";
//     const limit = req.header("limit") || 20;
//     const skip = req.header("skip") || 0;
//     const messages = await Message.find({});

//     const limitedArray = messages.slice(skip, limit);

//     const byField = (field) => {
//       if (sortValue === "desc") {
//         return (a, b) => (a[field] > b[field] ? 1 : -1);
//       }
//       if (sortValue === "asc") {
//         return (a, b) => (a[field] < b[field] ? 1 : -1);
//       }
//     };

//     const result = limitedArray.sort(byField(sort));
//     res.json({ result });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

module.exports = router;
