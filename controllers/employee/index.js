// https://studentsquare.org/ss-admin/p1/api/public/employee
const axios = require("axios");
const BASE_URL = "https://studentsquare.org/ss-admin/p1";
const getSpecificData = require("../../utils/getSpecificData");

exports.parenting_advocacy = async (req, res) => {
  try {
    let posts = await axios.get(BASE_URL + "/api/public/employee");

    const dpPromises = posts.data.allPost.map((post) =>
      getSpecificData(BASE_URL + "/api/public/mideas/" + post.dp)
    );
    const displayPicture = await Promise.all(dpPromises);

    const pagination = {
      totalEntries: posts.data.totalEntries,
      totalPages: posts.data.totalPages,
      currentPage: posts.data.currentPage,
      totalActiveItems: posts.data.totalActiveItems,
      totalInactiveItems: posts.data.totalInactiveItems,
    };

    const data = {
      posts: posts.data.allPost,
      displayPicture,
      pagination,
    };

    res.render("./parenting-advocacy.ejs", data);
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
