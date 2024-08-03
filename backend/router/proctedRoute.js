// protectedRoute.js
const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware");

router.get("/", authMiddleware, function (req, res) {
  res.send(
    `This is the ProtectedRoute page, accessed by user: ${req.userName}`
  );
});

module.exports = router;
