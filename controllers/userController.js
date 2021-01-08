const db = require("../models");

module.exports = {
  validate: (req, res) => {

    // db.Church.find({}).then(dbChurch => {
    //   console.log("CHURCH: ", dbChurch[0]._id)
    //   db.User.findOneAndUpdate(
    //     { email: req.body.cu },
    //     {
    //       $push: { adminOf: dbChurch[0]._id }
    //     }
    //   ).then((res) => {console.log(res)})
    // })


    // DOES USER EXIST IN DB?
    db.User.findOne({ email: req.body.cu }).then((dbUser) => {

      // console.log("BODY: ", req.body)

      // CREATE USER IF NOT LOCATED
      if (!dbUser) {
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
          res.json({
            errorMessage: "You do not have an admin account with SeatSave"
          });
        });
      } else {

        // Is user approved for church?
        db.Church.findOne({ adminEmail: { "adminEmail": dbUser.email} }).then((dbChurch) => {

          dbChurch ? res.json(dbUser) : res.json({errorMessage: "You do not have an admin account with SeatSave"})
          
        })
        
        

      }
    });
  },
};
