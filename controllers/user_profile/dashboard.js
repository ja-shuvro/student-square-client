const BASE_URL = "http://localhost:4040/ss-admin/p1";

const user_dashboard = (req, res, next) => {
  const data = {
    user: req.user,
  };
  console.log(data);
  res.status(404).render("dashboard", data);
};
module.exports = {
  user_dashboard,
};
