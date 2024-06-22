// http://studentsquare.org/ss-admin/p1/api/public/news
const axios = require("axios");
const BASE_URL = "https://studentsquare.org/ss-admin/p1";
const getSpecificData = require("../../utils/getSpecificData");

exports.homepage = async (req, res) => {
  try {
    let posts = await axios.get(BASE_URL + "/api/public/news");

    const thumbPromises = posts.data.allPost.map((post) =>
      getSpecificData(BASE_URL + "/api/public/thumbnails/" + post.thumb)
    );
    const thumbs = await Promise.all(thumbPromises);

    const logoPromises = posts.data.allPost.map((post) =>
      getSpecificData(BASE_URL + "/api/public/mideas/" + post.logo)
    );
    const logo = await Promise.all(logoPromises);

    const pagination = {
      totalEntries: posts.data.totalEntries,
      totalPages: posts.data.totalPages,
      currentPage: posts.data.currentPage,
      totalActiveItems: posts.data.totalActiveItems,
      totalInactiveItems: posts.data.totalInactiveItems,
    };

    const data = {
      posts: posts.data.allPost,
      thumbs,
      logo,
      pagination,
    };

    res.render("./index.ejs", data);
  } catch (error) {
    console.log(error);
  }
};
