const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  openSpots: {
    type: Number,
    required: true,
  },
  groups: [
    {
      type: Schema.Types.ObjectId,
      ref: "Group",
    },
  ],
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
