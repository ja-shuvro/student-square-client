const express = require("express");
const router = express.Router();
const { others } = require("../controllers");
const {
  privacyPolicy,
  about,
  ourMission,
  whereWeWork,
  press,
  whatWeDo,
  termsOfUse,
  faqs,
  contact,
} = others;

router.get("/privacy-policy", privacyPolicy);
router.get("/about", about);
router.get("/our-mission", ourMission);
router.get("/where-we-work", whereWeWork);
router.get("/press", press);
// router.get("/what-we-do", whatWeDo);
router.get("/terms-of-use", termsOfUse);
router.get("/faqs", faqs);
router.get("/contact-us", contact);

module.exports = router;
