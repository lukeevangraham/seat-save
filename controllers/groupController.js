const db = require("../models");

module.exports = {
  // make a group reservation
  post: async (req, res) => {
    try {
      console.log("BODY: ", req.body);
      const dbGroup = await db.Group.create(req.body);
      res.json({
        message: `Group reservation added ${dbGroup}`,
      });
    } catch (error) {
      alert(error);
    }
  },
};
