const BASE_URL = "http://localhost:4040/ss-admin/p1";

const profile = (req, res, next) => {
  const data = {
    user: req.user,
  };
  res.status(404).render("profile", data);
};
module.exports = {
  profile,
};
