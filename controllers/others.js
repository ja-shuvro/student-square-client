// notFoundController.js
const privacyPolicy = (req, res, next) => {
  res.status(404).render("privacy-policy");
};
const about = (req, res, next) => {
  res.status(404).render("about");
};
const ourMission = (req, res, next) => {
  res.status(404).render("our-mission");
};
const whereWeWork = (req, res, next) => {
  res.status(404).render("where-we-work");
};
const press = (req, res, next) => {
  res.status(404).render("press");
};
const whatWeDo = (req, res, next) => {
  res.status(404).render("what-we-do");
};
const termsOfUse = (req, res, next) => {
  res.status(404).render("terms-of-use");
};
const faqs = (req, res, next) => {
  res.status(404).render("faqs");
};
const contact = (req, res, next) => {
  res.status(404).render("contact");
};

module.exports = {
  privacyPolicy,
  about,
  ourMission,
  whereWeWork,
  press,
  whatWeDo,
  termsOfUse,
  faqs,
  contact,
};
