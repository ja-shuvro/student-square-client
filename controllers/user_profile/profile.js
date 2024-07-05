const BASE_URL = "http://studentsquare.org/ss-admin/p1";

const profile = (req, res, next) => {
  const data = {
    user: req.user,
  };
  res.status(404).render("profile", data);
};
module.exports = {
  profile,
};
