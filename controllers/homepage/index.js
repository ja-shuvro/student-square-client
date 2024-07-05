// http://studentsquare.org/ss-admin/p1/api/public/news
const axios = require("axios");
const BASE_URL = "http://studentsquare.org/ss-admin/p1";
const getSpecificData = require("../../utils/getSpecificData");

exports.homepage = async (req, res) => {
  try {
    console.log(req.user);
    let posts = await axios.get(BASE_URL + "/api/public/news");
    let heroPosts = await axios.get(BASE_URL + "/api/public/hero");
    let feedbackPosts = await axios.get(BASE_URL + "/api/public/feedback");
    let partnersPosts = await axios.get(BASE_URL + "/api/public/partners");

    // Filter posts with status true
    const activePosts = heroPosts.data.allPost.filter((post) => post.status);
    // Sort active posts by createdAt in descending order and get the latest one
    const latestActivePost = activePosts.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    )[0];

    const thumbPromises = posts.data.allPost.map((post) =>
      getSpecificData(BASE_URL + "/api/public/thumbnails/" + post.thumb)
    );
    const thumbs = await Promise.all(thumbPromises);

    const logoPromises = posts.data.allPost.map((post) =>
      getSpecificData(BASE_URL + "/api/public/mideas/" + post.logo)
    );
    const logo = await Promise.all(logoPromises);

    // Hero
    const sectionOneImg = await axios.get(
      BASE_URL + "/api/public/mideas/" + latestActivePost.section_one.img
    );
    const sectionTwoImg = await axios.get(
      BASE_URL + "/api/public/mideas/" + latestActivePost.section_two.img
    );
    const sectionThreeImg = await axios.get(
      BASE_URL + "/api/public/mideas/" + latestActivePost.section_three.img
    );

    // Feedback
    const feedbackImgPromises = feedbackPosts.data.allPost.map((post) =>
      getSpecificData(BASE_URL + "/api/public/thumbnails/" + post.thumb)
    );
    const feedbackImg = await Promise.all(feedbackImgPromises);

    // Partners
    const partnersImgPromises = partnersPosts.data.allPost.map((post) =>
      getSpecificData(BASE_URL + "/api/public/mideas/" + post.logo)
    );
    const partnersImg = await Promise.all(partnersImgPromises);

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
      hero: {
        sOne: {
          title: latestActivePost.section_one.title,
          img: sectionOneImg.data.img,
        },
        sTwo: {
          title: latestActivePost.section_two.title,
          img: sectionTwoImg.data.img,
        },
        sThree: {
          title: latestActivePost.section_three.title,
          img: sectionThreeImg.data.img,
        },
      },
      feedback: {
        allPost: feedbackPosts.data.allPost,
        images: feedbackImg,
      },
      partners: {
        allPost: partnersPosts.data.allPost,
        logo: partnersImg,
      },
      user: req.user,
    };

    res.render("./index.ejs", data);
  } catch (error) {
    console.log(error);
  }
};
