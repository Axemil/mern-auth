const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
  text: { type: String, required: true },
  author: { type: String, required: true },
  addedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  deletedAt: { type: Date },
});

module.exports = model("Message", messageSchema);
