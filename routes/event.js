const router = require("express").Router();
const eventController = require("../controllers/eventController")

router.post("/", eventController.post)

module.exports = router;