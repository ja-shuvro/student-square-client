const BASE_URL = "http://studentsquare.org/ss-admin/p1";

exports.notices_bord = async (req, res) => {
  try {
    const data = {
      user: req.user,
    };
    res.render("./notice-bord.ejs", data);
  } catch (error) {
    console.log(error);
  }
};

exports.notices_bord_details = async (req, res) => {
  try {
    const data = {
      user: req.user,
    };
    res.render("./notice-bord-single.ejs", data);
  } catch (error) {
    console.log(error);
  }
};
