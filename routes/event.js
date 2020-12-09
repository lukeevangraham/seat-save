const router = require("express").Router();
const eventController = require("../controllers/eventController")

router.post("/", eventController.post)
router.get("/", eventController.get)

module.exports = router;