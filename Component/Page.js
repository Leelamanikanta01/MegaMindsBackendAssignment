const express = require("express");
const router = express.Router();

const portfolioData = [
  { id: 1, title: "Project 1", description: "Description for Project 1" },
  { id: 2, title: "Project 2", description: "Description for Project 2" },
];

router.get("/api/projects", (req, res) => {
  res.json(portfolioData);
});

module.exports = router;
