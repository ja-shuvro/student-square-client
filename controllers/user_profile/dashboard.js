const user_dashboard = (req, res, next) => {
  res.status(404).render("dashboard");
};
module.exports = {
  user_dashboard,
};
