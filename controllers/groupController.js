const db = require("../models");

module.exports = {
  // make a group reservation
  post: async (req, res) => {
    try {

      const dbGroup = await db.Group.create(req.body);
      const dbEvent = await db.Event.findOneAndUpdate(
        { _id: req.params.id },
        {
          $push: { groups: dbGroup._id },
          $inc: { openSpots: -dbGroup.groupSize },
        }
      );
      res.json({
        message: `Group reservation added ${dbEvent}`,
      });
    } catch (error) {
      alert(error);
    }
  },
};
