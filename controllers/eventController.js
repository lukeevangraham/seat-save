const db = require("../models");

module.exports = {
  // post an event
  post: async (req, res) => {
    try {
      console.log("BODY: ", req.body);
      // console.log("LOOK HERE:", new Date(req.body.date).toISOString())
      // const convertedDate = new Date(req.body.date).toISOString()

      // const newBody = {
      //   eventName: req.body.eventName,
      //   date: convertedDate,
      //   openSpots: req.body.openSpots
      // }



      const dbEvent = await db.Event.create(req.body);
      res.json(dbEvent);
    } catch (error) {
      alert(error);
    }
  },
  get: async (req, res) => {
    try {
      const dbEvent = await db.Event.find({}, "eventName date openSpots").sort({ date:-1 });
      res.json(dbEvent);
    } catch (error) {
      alert(error);
    }
  },
  getById: async (req, res) => {
    try {
      // console.log(req.params)
      const dbEvent = await db.Event.findById(req.params.id).select(
        "eventName date openSpots"
      );
      res.json(dbEvent);
    } catch (error) {
      console.log(error);
    }
  },
  getAdminById: async (req, res) => {
    try {
      const dbEvent = await db.Event.find({ _id: req.params.id }).populate(
        "groups"
      );
      res.json(dbEvent);
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      const dbEvent = await db.Event.remove({ _id: req.params.id });
      res.json(dbEvent);
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const dbEvent = await db.Event.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
      res.json(dbEvent)
    } catch (error) {
      console.log(error)
    }
  }
};
