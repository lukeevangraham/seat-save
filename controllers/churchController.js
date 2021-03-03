const db = require("../models");

module.exports = {
  // create a church account
  post: async (req, res) => {
    console.log("req body", req.body);
    const newBody = {
      churchName: req.body.churchName,
      adminEmail: { adminEmail: req.body.adminEmail },
    };
    try {
      console.log("trying to post church!");
      const dbChurch = await db.Church.create(newBody);
      console.log("dbChurch: ", dbChurch);
      res.json({
        message: `Church added ${dbChurch}`,
      });
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const dbChurch = await db.Church.find({}, "maxGroupSize signupMessage churchName");
      res.json(dbChurch);
    } catch (error) {
      console.log(error);
    }
  },
  adminGet: async (req, res) => {
    console.log("getting an admin: ");
    try {
      const dbChurch = await db.Church.find({});
      res.json(dbChurch);
    } catch (error) {
      console.log(error);
    }
  },
  adminUpdate: async (req, res) => {
    try {
      const dbChurch = await db.Church.findOneAndUpdate(
        {},
        { $set: req.body },
        { new: true }
      );
      res.json(dbChurch);
    } catch (error) {
      console.log(error);
    }
  },
};
