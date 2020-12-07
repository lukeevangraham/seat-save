const router = require("express").Router();
const churchRoutes = require("./church");
const eventRoutes = require("./event");
const groupRoutes = require("./group");

router.use("/church", churchRoutes)

router.use("/event", eventRoutes)

router.use("/group", groupRoutes)

// For anything else, render the html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

module.exports = router;