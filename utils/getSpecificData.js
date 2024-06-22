const axios = require("axios");

const getSpecificData = async (link) => {
  try {
    const response = await axios.get(link);
    return response.data;
  } catch (error) {
    console.log("Get Spacific Data Funtion Error:", error);
  }
};

module.exports = getSpecificData;
