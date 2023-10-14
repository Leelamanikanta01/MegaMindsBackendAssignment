const express = require("express");
const router = express.Router();

router.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  res.json({ message: "User registered!" });
});

module.exports = router;
