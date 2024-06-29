const express = require("express");
const router = express.Router();
const { auth } = require("../controllers");
const {
  registration,
  submit_data,
  mail_verify,
  login,
  recover_password,
  recover_password_verify,
} = auth;

router.get("/login", login);
router.get("/verify/:email", mail_verify);
// router.get("/verify-email/:email", mail_verify);
router.get("/registration", registration);
router.get("/submit", submit_data);
router.get("/recover-password", recover_password);
router.get("/recover-password/:email", recover_password_verify);

module.exports = router;
