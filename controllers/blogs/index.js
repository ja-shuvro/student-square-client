const axios = require("axios");
const getSpecificData = require("../../utils/getSpecificData");
const BASE_URL = "http://studentsquare.org/ss-admin/p1";

exports.blogs = async (req, res) => {
  try {
    let posts = await axios.get(BASE_URL + "/api/public/blogs/");

    const thumbPromises = posts.data.allPost.map((post) =>
      getSpecificData(BASE_URL + "/api/public/thumbnails/" + post.thumb)
    );
    const thumbs = await Promise.all(thumbPromises);

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
      pagination,
      user: req.user,
    };

    res.render("./blogs.ejs", data);
  } catch (error) {
    console.log(error);
  }
};

exports.blog = async (req, res) => {
  const { id } = req.params;

  try {
    let posts = await axios.get(BASE_URL + "/api/public/blogs/");
    let post = await axios.get(BASE_URL + "/api/public/blogs/" + id);
    const thumbs = await axios.get(
      BASE_URL + "/api/public/thumbnails/" + post.data.thumb
    );
    let author = await axios.get(
      BASE_URL + "/api/public/users/" + post.data.posted_by
    );
    let peraOne = JSON.parse(post.data.pera_one.replace(/\\/g, ""));
    let peraOneImg = await axios.get(
      BASE_URL + "/api/public/mideas/" + peraOne.img
    );
    let peraTwo = JSON.parse(post.data.pera_two.replace(/\\/g, ""));
    let peraTwoImg = await axios.get(
      BASE_URL + "/api/public/mideas/" + peraTwo.img
    );
    let peraThree = JSON.parse(post.data.pera_three.replace(/\\/g, ""));
    let peraThreeImg = await axios.get(
      BASE_URL + "/api/public/mideas/" + peraThree.img
    );
    const thumbPromises = posts.data.allPost.map((post) =>
      getSpecificData(BASE_URL + "/api/public/thumbnails/" + post.thumb)
    );
    const thumbsForSug = await Promise.all(thumbPromises);

    let data = {
      posts: posts.data.allPost,
      thumbsForSug,
      post: post.data,
      thumbs: thumbs.data,
      author: author.data,
      peraOne,
      peraTwo,
      peraThree,
      peraOneImg: peraOneImg.data,
      peraTwoImg: peraTwoImg.data,
      peraThreeImg: peraThreeImg.data,
      user: req.user,
    };
    res.render("./single-blog.ejs", data);
  } catch (error) {
    console.log(error);
  }
};
