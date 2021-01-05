const router = require("express").Router();
const groupController = require("../controllers/groupController");

router.route("/:id").post(groupController.post);
router.route("/:id").put(groupController.update);

module.exports = router;
