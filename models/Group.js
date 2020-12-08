const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema({
  groupName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  groupSize: {
    type: Number,
    required: true,
  },
  Note: {
    type: String,
  },
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
