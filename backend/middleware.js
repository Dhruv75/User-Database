// middleware.js

require("dotenv").config();
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ message: "Forbidden" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userName = decoded.userName;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Forbidden" });
  }
};

module.exports = {
  authMiddleware,
};
