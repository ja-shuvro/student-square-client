const axios = require("axios");
const BASE_URL = "http://student-square.test/wp-json/wp/v2";

exports.blogs = async (req, res) => {
  try {
    res.render("./blogs.ejs");
  } catch (error) {
    console.log(error);
  }
};

exports.blog = async (req, res) => {
  const { id } = req.params;

  try {
    let posts = await axios.get(BASE_URL + "/posts/");
    let post = await axios.get(BASE_URL + "/posts/" + id);
    let author = await axios.get(post.data._links.author[0].href);
    let featuredImg = await axios.get(
      BASE_URL + "/media/" + post.data.featured_media
    );
    const tagPromises = post.data.tags.map((tagId) =>
      axios.get(`${BASE_URL}/tags/${tagId}`)
    );
    const tagResponses = await Promise.all(tagPromises);
    const tags = tagResponses.map((response) => response.data.name);

    let result = {
      posts: posts.data,
      post: post.data,
      author: author.data,
      featuredImg: featuredImg.data,
      tags,
    };
    res.render("./single-blog.ejs", result);
  } catch (error) {
    console.log(error);
  }
};
