exports.notices_bord = async (req, res) => {
  try {
    res.render("./notice-bord.ejs");
  } catch (error) {
    console.log(error);
  }
};

exports.notices_bord_details = async (req, res) => {
  try {
    res.render("./notice-bord-single.ejs");
  } catch (error) {
    console.log(error);
  }
};
