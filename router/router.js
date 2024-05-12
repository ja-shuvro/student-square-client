const express = require("express");
const router = express.Router();
const { blogs, employee, notices_bord, homepage } = require("./index");

router.use(homepage);
router.use(blogs);
router.use(employee);
router.use(notices_bord);

module.exports = router;
