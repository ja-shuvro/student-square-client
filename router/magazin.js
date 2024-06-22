const express = require("express");
const router = express.Router();
const { magazins, magazin } = require("../controllers");

router.get("/magazins/:id", magazin);
router.get("/magazins", magazins);

module.exports = router;
