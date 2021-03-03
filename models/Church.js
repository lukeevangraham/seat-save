const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const churchSchema = new Schema({
  adminFirstName: {
    type: String,
    // required: true,
  },
  adminLastName: {
    type: String,
    //   required: true
  },
  adminEmail: {
    type: Array,
    required: true,
  },
  adminPhone: {
    type: Number,
  },
  maxGroupSize: {
    type: Number,
    //   required: true,
    default: 10,
  },
  signupMessage: {
    type: String,
  },
  churchName: {
    type: String,
  },
});

const Church = mongoose.model("Church", churchSchema);

module.exports = Church;
