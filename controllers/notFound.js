// notFoundController.js
const notFoundController = (req, res, next) => {
  res.status(404).render("not-found", {
    status: "fail",
    message: "This Site is under contraction, this page will be comming soon.",
  });
};

module.exports = notFoundController;
