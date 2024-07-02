const { homepage } = require("./homepage");
const { blogs, blog } = require("./blogs");
const { employee, who_we_are } = require("./employee");
const { notices_bord, notices_bord_details } = require("./notices-bord");
const { magazins, magazin } = require("./mgazins");
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
} = require("./others");
const {
  registration,
  submit_data,
  mail_verify,
  recover_password,
  recover_password_verify,
  login,
} = require("./auth");

const { user_dashboard, user_blog, profile } = require("./user_profile");

module.exports = {
  homepage,
  blogs,
  blog,
  employee,
  who_we_are,
  notices_bord,
  notices_bord_details,
  magazins,
  magazin,
  auth: {
    registration,
    submit_data,
    mail_verify,
    recover_password,
    recover_password_verify,
    login,
  },
  others: {
    privacyPolicy,
    about,
    ourMission,
    whereWeWork,
    press,
    whatWeDo,
    termsOfUse,
    faqs,
    contact,
  },

  user_profile: {
    user_dashboard,
    user_blog,
    profile,
  },
};
