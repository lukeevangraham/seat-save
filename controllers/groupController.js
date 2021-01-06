const db = require("../models");
const transporter = require("../nodemailer/");

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

      let mailOptions = {
        from: "donotreply@rbcpc.org",
        to: dbGroup.email,
        subject: `Reservation for ${dbEvent.eventName}`,
        text: `This confirms you have a group reservation for:
        
        ${dbEvent.eventName}
        
        Group Name: ${dbGroup.groupName}
        Group Size: ${dbGroup.groupSize}
        Email: ${dbGroup.email}
        Event Name: ${dbEvent.eventName}
        Event Date: ${new Date(dbEvent.date).toLocaleDateString()}
        Event Time: ${new Date(dbEvent.date).toLocaleTimeString()}`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent " + info.response);
        }
      });

      res.json({
        message: `Group reservation added!`,
        dbGroup,
      });
    } catch (error) {
      alert(error);
    }
  },
  update: async (req, res) => {
    const dbGroup = await db.Group.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    const dbEvent = await db.Event.findOneAndUpdate(
      { _id: req.body.eventId },
      { $inc: { openSpots: req.body.sizeDifference } },
      { new: true }
    );
    res.json({ dbGroup, dbEvent });
  },
  delete: async (req, res) => {
    const dbGroup = await db.Group.remove({ _id: req.params.id });
    const dbEvent = await db.Event.findOneAndUpdate(
      { _id: req.params.eventId },
      {
        $pull: { groups: req.params.id },
        $inc: { openSpots: req.params.size },
      },
      { new: true }
    ).populate("groups");
    res.json({ dbGroup, dbEvent });
  },
};
