const express = require("express");
const router = express.Router();
const { employee, who_we_are } = require("../controllers");

router.get("/who-we-are/:id", employee);
router.get("/who-we-are", who_we_are);

module.exports = router;
