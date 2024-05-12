const express = require("express");
const router = express.Router();
const { blogs, blog } = require("../controllers");

router.get("/blogs/:id", blog);
router.get("/blogs", blogs);

module.exports = router;
