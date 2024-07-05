// https://studentsquare.org/ss-admin/p1/api/public/employee
const axios = require("axios");
const BASE_URL = "http://studentsquare.org/ss-admin/p1";
const getSpecificData = require("../../utils/getSpecificData");

exports.who_we_are = async (req, res) => {
  try {
    let posts = await axios.get(BASE_URL + "/api/public/employee");
    let advisoriesPosts = await axios.get(BASE_URL + "/api/public/advisories");
    let communicationsPosts = await axios.get(
      BASE_URL + "/api/public/communication"
    );
    let fundraisingPosts = await axios.get(
      BASE_URL + "/api/public/fundraising"
    );
    let operationsPosts = await axios.get(BASE_URL + "/api/public/operations");
    let policyAndFinancePosts = await axios.get(
      BASE_URL + "/api/public/policyAndFinance"
    );
    let partnershipsPosts = await axios.get(
      BASE_URL + "/api/public/partnerships"
    );
    let peopleAndCulturePosts = await axios.get(
      BASE_URL + "/api/public/peopleAndCulture"
    );
    let technologyPosts = await axios.get(BASE_URL + "/api/public/technology");
    let timorLestePosts = await axios.get(BASE_URL + "/api/public/timorLeste");

    const dpPromises = posts.data.allPost.map((post) =>
      getSpecificData(BASE_URL + "/api/public/mideas/" + post.dp)
    );
    const displayPicture = await Promise.all(dpPromises);

    // Advisories
    const advisoriesdpPromises = posts.data.allPost.map((post) =>
      getSpecificData(BASE_URL + "/api/public/mideas/" + post.dp)
    );
    const advisoriesdisplayPicture = await Promise.all(advisoriesdpPromises);

    // Communications
    const communicationsDp = communicationsPosts.data.allPost.map((post) =>
      getSpecificData(BASE_URL + "/api/public/mideas/" + post.dp)
    );
    const communicationsPP = await Promise.all(communicationsDp);

    // Fundraising
    const fundraisingDp = fundraisingPosts.data.allPost.map((post) =>
      getSpecificData(BASE_URL + "/api/public/mideas/" + post.dp)
    );
    const fundraisingPP = await Promise.all(fundraisingDp);

    // Operations
    const operationsDp = operationsPosts.data.allPost.map((post) =>
      getSpecificData(BASE_URL + "/api/public/mideas/" + post.dp)
    );
    const operationsPP = await Promise.all(operationsDp);

    // PolicyAndFinance
    const policyAndFinanceDp = policyAndFinancePosts.data.allPost.map((post) =>
      getSpecificData(BASE_URL + "/api/public/mideas/" + post.dp)
    );
    const policyAndFinancePP = await Promise.all(policyAndFinanceDp);

    // Partnerships
    const partnershipsDp = partnershipsPosts.data.allPost.map((post) =>
      getSpecificData(BASE_URL + "/api/public/mideas/" + post.dp)
    );
    const partnershipsPP = await Promise.all(partnershipsDp);

    // peopleAndCulture
    const peopleAndCultureDp = peopleAndCulturePosts.data.allPost.map((post) =>
      getSpecificData(BASE_URL + "/api/public/mideas/" + post.dp)
    );
    const peopleAndCulturePP = await Promise.all(peopleAndCultureDp);

    // technology
    const technologyDp = technologyPosts.data.allPost.map((post) =>
      getSpecificData(BASE_URL + "/api/public/mideas/" + post.dp)
    );
    const technologyPP = await Promise.all(technologyDp);

    // timorLeste
    const timorLesteDp = timorLestePosts.data.allPost.map((post) =>
      getSpecificData(BASE_URL + "/api/public/mideas/" + post.dp)
    );
    const timorLestePP = await Promise.all(timorLesteDp);

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
      advisories: advisoriesPosts.data.allPost,
      advisoriesdisplayPicture,
      communications: communicationsPosts.data.allPost,
      communicationsDP: communicationsPP,
      fundraising: fundraisingPosts.data.allPost,
      fundraisingDP: fundraisingPP,
      operations: operationsPosts.data.allPost,
      operationsDP: operationsPP,
      policyAndFinance: policyAndFinancePosts.data.allPost,
      policyAndFinanceDP: policyAndFinancePP,
      partnerships: partnershipsPosts.data.allPost,
      partnershipsDP: partnershipsPP,
      peopleAndCulture: peopleAndCulturePosts.data.allPost,
      peopleAndCultureDP: peopleAndCulturePP,
      technology: technologyPosts.data.allPost,
      technologyDP: technologyPP,
      timorLeste: timorLestePosts.data.allPost,
      timorLesteDP: timorLestePP,
      pagination,
      user: req.user,
    };

    res.render("./who-we-are.ejs", data);
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
