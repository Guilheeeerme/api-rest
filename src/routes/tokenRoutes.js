const express = require("express");

const tokenController = require("../controllers/TokenController");

const router = express.Router();

router.post("/", tokenController.store);

module.exports = router;
