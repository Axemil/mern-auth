const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, mixlength: 5 },
  displayName: { type: String },
});

module.exports = model("User", userSchema);
