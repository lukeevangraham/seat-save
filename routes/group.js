const router = require("express").Router();
const groupController = require("../controllers/groupController");

router.route("/:id").post(groupController.post);

module.exports = router;
