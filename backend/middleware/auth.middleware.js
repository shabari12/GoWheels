const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

module.exports.authUser = async (req, res, next) => {
  console.log("authUser middleware called"); // Initial log to confirm middleware execution

  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  console.log("Headers received:", req.headers); // Log headers
  console.log("Cookies received:", req.cookies); // Log cookies
  console.log("Token received:", token); // Log the token

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded); // Log the decoded token

    const user = await userModel.findById(decoded._id);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }

    req.user = user;
    return next();
  } catch (err) {
    console.error("Token verification error:", err);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};