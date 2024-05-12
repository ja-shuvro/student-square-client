exports.parenting_advocacy = async (req, res) => {
  try {
    res.render("./parenting-advocacy.ejs");
  } catch (error) {
    console.log(error);
  }
};
exports.employee = async (req, res) => {
  try {
    res.render("./employee.ejs");
  } catch (error) {
    console.log(error);
  }
};
