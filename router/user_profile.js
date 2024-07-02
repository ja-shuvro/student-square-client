const express = require("express");
const router = express.Router();
const { user_profile } = require("../controllers");
const { user_dashboard, user_blog, profile } = user_profile;

router.get("/dashboard", user_dashboard);
router.get("/dashboard/blogs", user_blog);
router.get("/profile", profile);

module.exports = router;
