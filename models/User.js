// USER MODEL
// ===============

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  iD: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  fullName: {
    type: String,
  },
  givenName: {
    type: String,
  },
  familyName: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
