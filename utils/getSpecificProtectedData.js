const axios = require("axios");

const getSpecificData = async (link, token) => {
  try {
    const response = await axios.get(link, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Get Spacific Data Funtion Error:", error);
  }
};

module.exports = getSpecificData;
