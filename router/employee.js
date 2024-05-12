const express = require("express");
const router = express.Router();
const { employee, parenting_advocacy } = require("../controllers");

router.get("/employee/:id", employee);
router.get("/parenting-advocacy", parenting_advocacy);

module.exports = router;
