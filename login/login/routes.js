const express = require("express");
const router = express.Router();

const userController = require("./controller");

router.post("/createuser", userController.createUsers);
router.post("/signin", userController.signIn);

module.exports = router;
