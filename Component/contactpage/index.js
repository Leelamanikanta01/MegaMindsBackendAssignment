const express = require("express");
const router = express.Router();

router.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  res.json({ message: "Inquiry received!" });
});

module.exports = router;
