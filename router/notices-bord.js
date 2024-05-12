const express = require("express");
const router = express.Router();
const { notices_bord, notices_bord_details } = require("../controllers");

router.get("/notices-bord/:id", notices_bord_details);
router.get("/notices-bord", notices_bord);

module.exports = router;
