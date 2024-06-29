const express = require("express");
const router = express.Router();
const {
  blogs,
  employee,
  notices_bord,
  homepage,
  magazin,
  auth,
} = require("./index");

router.use(homepage);
router.use(blogs);
router.use(employee);
router.use(notices_bord);
router.use(magazin);
router.use(auth);

module.exports = router;
