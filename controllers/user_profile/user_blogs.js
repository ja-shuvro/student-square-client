const { default: axios } = require("axios");

const BASE_URL = "http://studentsquare.org/ss-admin/p2";
const getSpecificProtectedData = require("../../utils/getSpecificProtectedData");

const user_blog = async (req, res, next) => {
  const token = req.cookies.token;
  const user = req.user;
  if (!token) {
    return res.redirect("/login");
  }
  if (!user) {
    return res.redirect("/login");
  }

  try {
    if (user.role !== "author") {
      const data = {
        user: req.user,
      };

      return res.status(200).render("user-blogs", data);
    }

    const response = await axios.get(BASE_URL + "/api/admin/users/" + user.id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const responseCategory = await axios.get(
      BASE_URL + "/api/admin/categories",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const blogs = response.data.allPost;
    const approveCategoryPromise = blogs.approvePost.entries.map((post) =>
      getSpecificProtectedData(
        BASE_URL + "/api/admin/categories/" + post.category_id,
        token
      )
    );
    const approveCategories = await Promise.all(approveCategoryPromise);

    const pendingCategoryPromise = blogs.pendingPost.entries.map((post) =>
      getSpecificProtectedData(
        BASE_URL + "/api/admin/categories/" + post.category_id,
        token
      )
    );
    const pendingCategories = await Promise.all(pendingCategoryPromise);

    const rejectCategoryPromise = blogs.rejectPost.entries.map((post) =>
      getSpecificProtectedData(
        BASE_URL + "/api/admin/categories/" + post.category_id,
        token
      )
    );
    const rejectCategories = await Promise.all(rejectCategoryPromise);

    // Parse and clean tags only if they exist
    const cleanTags = (tags) => {
      if (tags) {
        return JSON.parse(tags.replace(/\\/g, ""));
      }
      return [];
    };

    const approveTags = blogs.approvePost.entries.map((post) =>
      cleanTags(post.tags)
    );
    const pendingTags = blogs.pendingPost.entries.map((post) =>
      cleanTags(post.tags)
    );
    const rejectTags = blogs.rejectPost.entries.map((post) =>
      cleanTags(post.tags)
    );

    const data = {
      user: req.user,

      blogs: {
        approvePost: {
          allPost: blogs.approvePost.entries,
          approveCategories,
          approveTags,
          pagination: blogs.approvePost.pagination,
        },
        pendingPost: {
          allPost: blogs.pendingPost.entries,
          pendingCategories,
          pendingTags,
          pagination: blogs.pendingPost.pagination,
        },
        rejectPost: {
          allPost: blogs.rejectPost.entries,
          rejectCategories,
          rejectTags,
          pagination: blogs.rejectPost.pagination,
        },
        categories: responseCategory.data.allPost,
      },
    };

    res.status(200).render("user-blogs", data);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  user_blog,
};
