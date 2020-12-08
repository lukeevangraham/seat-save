const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  openSpots: {
    type: Number,
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
