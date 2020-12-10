const router = require("express").Router();
const eventController = require("../controllers/eventController");

// Matches with "/event"
router.route("/")
    .post(eventController.post)
    .get(eventController.get);

// Matches with "./event/:id"
router.route("/:id")
    .get(eventController.getById)

module.exports = router;
