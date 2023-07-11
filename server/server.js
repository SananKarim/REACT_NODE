const express = require("express");
const authRoutes = require("./routes/authRoutes");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.listen(5001, () => {
  console.log("server started");
});

app.use(authRoutes);
