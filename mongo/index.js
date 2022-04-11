const dotenv = require("dotenv").config();
const express = require("express");
const port = 3002;
const app = express();
const apiRoutes = require("./routes/api");
const adminRoutes = require("./routes/admin");
const connection = require("./database");
const cors = require("cors");
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.post("/", function requestHandle(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Content-Type", "application/json");
});
app.use("/api", apiRoutes);
app.use("/admin", adminRoutes);
app.all("*", (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Can't fint ${req.originalUrl} on this server`,
  });
});

app.listen(port, () => {
  console.log(`example app listen ${port}`);
});
