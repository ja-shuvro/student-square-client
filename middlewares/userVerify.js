const { default: axios } = require("axios");
const BASE_URL = `http://localhost:4040`;

const userVerify = async (req, res, next) => {
  try {
    // Extract token from request cookies
    const token = req.cookies.token;
    if (!token) {
      return res.redirect("/login");
    }

    const verifyTokey = await axios.post(
      `${BASE_URL}/ss-admin/p1/auth/users/token-verify`,
      { token }
    );

    req.user = verifyTokey.data.user;
    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // If token verification fails, return 401 Unauthorized
    console.error("Error verifying token:", error);
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = userVerify;
