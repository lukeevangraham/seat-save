const db = require("../models");

module.exports = {
  // post an event
  post: async (req, res) => {
    try {
      console.log("BODY: ", req.body);
      const dbEvent = await db.Event.create(req.body);
      res.json({
        message: `Event added ${dbEvent}`,
      });
    } catch (error) {
      alert(error);
    }
  },
  get: async (req, res) => {
    try {
      const dbEvent = await db.Event.find({});
      res.json(dbEvent);
    } catch (error) {
      alert(error);
    }
  },
  getById: async (req, res) => {
    try {
      // console.log(req.params)
      const dbEvent = await db.Event.findById(req.params.id);
      res.json(dbEvent);
    } catch (error) {
      console.log(error);
    }
  },
};
