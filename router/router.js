const express = require("express");
const router = express.Router();
const {
  blogs,
  employee,
  notices_bord,
  homepage,
  magazin,
  auth,
  others,
  user_profile,
} = require("./index");

router.use(homepage);
router.use(blogs);
router.use(employee);
router.use(notices_bord);
router.use(magazin);
router.use(auth);
router.use(others);
router.use(user_profile);

module.exports = router;
