const { homepage } = require("./homepage");
const { blogs, blog } = require("./blogs");
const { employee, parenting_advocacy } = require("./employee");
const { notices_bord, notices_bord_details } = require("./notices-bord");
const { magazins, magazin } = require("./mgazins");
const {
  registration,
  submit_data,
  mail_verify,
  recover_password,
  recover_password_verify,
  login,
} = require("./auth");

module.exports = {
  homepage,
  blogs,
  blog,
  employee,
  parenting_advocacy,
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
};
