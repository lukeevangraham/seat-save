const router = require("express").Router();
const groupController = require("../controllers/groupController");

router.post("/", groupController.post);

module.exports = router;
