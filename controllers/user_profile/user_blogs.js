const BASE_URL = "http://localhost:4040/ss-admin/p1";

const user_blog = (req, res, next) => {
  const data = {
    user: req.user,
  };

  res.status(404).render("user-blogs", data);
};
module.exports = {
  user_blog,
};
