const express = require("express");
const app = express();
const port = process.env.PORT || 80;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/v1/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
