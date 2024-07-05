const BASE_URL = "http://studentsquare.org/ss-admin/p1";

const user_dashboard = (req, res, next) => {
  const data = {
    user: req.user,
  };
  res.status(404).render("dashboard", data);
};
module.exports = {
  user_dashboard,
};
