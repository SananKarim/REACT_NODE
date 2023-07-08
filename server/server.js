const express = require("express");
const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(express.json());

app.listen(5000, () => {
  console.log("server started");
});

app.post("/register", (req, res) => {
  res.json({ user: ["userOne", "userTwo"] });
});

app.use(authRoutes);


