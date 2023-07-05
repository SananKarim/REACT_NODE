const express = require("express");

const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ user: ["userOne", "userTwo"] });
});

app.listen(5000, () => {
  console.log("server started");
});