const user_blog = (req, res, next) => {
  res.status(404).render("user-blogs");
};
module.exports = {
  user_blog,
};
