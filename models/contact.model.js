const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  author: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  category: { type: String },
  addedAt: { type: String, default: Date.now() },
  deletedAt: { type: String },
  updatedAt: { type: String },
});

module.exports = model("Contact", contactSchema);
