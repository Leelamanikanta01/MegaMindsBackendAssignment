const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/api/services", (req, res) => {
  const services = [
    { id: 1, title: "Service 1", description: "Description for Service 1" },
    { id: 2, title: "Service 2", description: "Description for Service 2" },
  ];
  res.json(services);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
