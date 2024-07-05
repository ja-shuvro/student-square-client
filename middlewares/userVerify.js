const { default: axios } = require("axios");
const BASE_URL = `http://studentsquare.org/ss-admin/p1`;

const userVerify = async (req, res, next) => {
  try {
    // Extract token from request cookies
    const token = req.cookies.token;
    if (!token) {
      return res.redirect("/login");
    }

    const response = await axios.post(
      `${BASE_URL}/auth/users/token-verify`,
      { token }, // empty object for POST data since we're only sending headers
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    req.user = response.data.user;
    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // If token verification fails, return 401 Unauthorized
    console.error("Error verifying token:", error);
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = userVerify;
