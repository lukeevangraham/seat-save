const db = require("../models");

module.exports = {
  // create a church account
  post: async (req, res) => {
    try {
      const dbChurch = await db.Church.create(req.body);
      res.json({
        message: `Church added ${dbChurch}`,
      });
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const dbChurch = await db.Church.find({}, "maxGroupSize signupMessage" );
      res.json(dbChurch);
    } catch (error) {
      console.log(error);
    }
  },
  adminGet: async (req, res) => {
    try {
      const dbChurch = await db.Church.find({});
      res.json(dbChurch);
    } catch (error) {
      console.log(error);
    }
  },
  adminUpdate: async (req, res) => {
    try {
      const dbChurch = await db.Church.findOneAndUpdate({}, { $set: req.body }, { new: true } )
      res.json(dbChurch)
    } catch (error) {
      console.log(error)
    }
  }
};
