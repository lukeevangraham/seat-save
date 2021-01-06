const router = require("express").Router();
const churchController = require("../controllers/churchController")

router.post("/", churchController.post)
router.get("/", churchController.get)
router.get("/admin", churchController.adminGet)
router.put("/admin", churchController.adminUpdate)

module.exports = router;