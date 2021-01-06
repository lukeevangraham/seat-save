const router = require("express").Router();
const churchController = require("../controllers/churchController")

router.post("/", churchController.post)
router.get("/", churchController.get)

module.exports = router;