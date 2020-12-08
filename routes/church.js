const router = require("express").Router();
const churchController = require("../controllers/churchController")

router.post("/", churchController.post)

module.exports = router;