const profile = (req, res, next) => {
  res.status(404).render("profile");
};
module.exports = {
  profile,
};
