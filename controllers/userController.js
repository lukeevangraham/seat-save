const db = require("../models");

module.exports = {
  validate: (req, res) => {

    // DOES USER EXIST IN DB?
    db.User.find({ email: req.body.cu }).then((dbUser) => {

      // CREATE USER IF NOT LOCATED
      if (dbUser.length <= 0) {
        const { BT, Ad, fV, iT, SJ, cu } = req.body;
        const renamedBody = {
          iD: BT,
          fullName: Ad,
          givenName: fV,
          familyName: iT,
          imageURL: SJ,
          email: cu,
        };

        db.User.create(renamedBody).then((createdDbUser) => {
          res.json(createdDbUser);
        });
      } else {
        res.json(dbUser);
      }
    });
  },
};
