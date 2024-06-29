const axios = require("axios");
const getSpecificData = require("../../utils/getSpecificData");
const BASE_URL = "http://studentsquare.org/ss-admin/p1";

const registration = async (req, res) => {
  try {
    res.render("./register.ejs");
  } catch (error) {
    console.log(error);
  }
};

const submit_data = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      levelofStudy,
      subject,
      institutionName,
      satisfied,
      reason_satisfied,
      regret,
      reason_regret,
      confusion,
      password,
      confirm_password,
    } = req.body;
    let isPasswordMatched = password === confirm_password;

    if (!isPasswordMatched) {
      throw new Error("The password is not matched!");
    }
    await axios.post(BASE_URL + "/api/public/global/users", {
      name,
      email,
      phone,
      levelofStudy,
      subject,
      institutionName,
      satisfied,
      reason_satisfied,
      regret,
      reason_regret,
      confusion,
      password,
    });
    res.status(201).json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

const mail_verify = async (req, res) => {
  try {
    const { email } = req.params;
    res.render("./mail-verify.ejs", { email });
  } catch (error) {
    console.error("Error verifying email:", error);
  }
};

const recover_password = async (req, res) => {
  try {
    res.render("./forgot-password.ejs");
  } catch (error) {
    console.error("Error verifying email:", error);
  }
};

const recover_password_verify = async (req, res) => {
  try {
    const { email } = req.params;
    res.render("./mail-verify-for-recover-password.ejs", { email });
  } catch (error) {
    console.error("Error verifying email:", error);
  }
};

const login = async (req, res) => {
  try {
    res.render("./login.ejs");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registration,
  submit_data,
  mail_verify,
  login,
  recover_password,
  recover_password_verify,
};
