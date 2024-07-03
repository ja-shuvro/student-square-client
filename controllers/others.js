const BASE_URL = "http://localhost:4040/ss-admin/p1";

const privacyPolicy = (req, res, next) => {
  res.status(404).render("privacy-policy");
};
const about = (req, res, next) => {
  const data = {
    user: req.user,
  };
  res.status(404).render("about", data);
};
const ourMission = (req, res, next) => {
  const data = {
    user: req.user,
  };
  res.status(404).render("our-mission", data);
};
const whereWeWork = (req, res, next) => {
  const data = {
    user: req.user,
  };
  res.status(404).render("where-we-work", data);
};
const press = (req, res, next) => {
  const data = {
    user: req.user,
  };
  res.status(404).render("press", data);
};
const whatWeDo = (req, res, next) => {
  const data = {
    user: req.user,
  };
  res.status(404).render("what-we-do", data);
};
const termsOfUse = (req, res, next) => {
  const data = {
    user: req.user,
  };
  res.status(404).render("terms-of-use", data);
};
const faqs = (req, res, next) => {
  const data = {
    user: req.user,
  };
  res.status(404).render("faqs", data);
};
const contact = (req, res, next) => {
  const data = {
    user: req.user,
  };
  res.status(404).render("contact", data);
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
