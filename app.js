const express = require("express");
const router = require("./src/routes/api");
const app = express();

app.use("/api/v1", router);

app.use("*", (req, res) => {
  res.status(404).json({ status: "Fail", data: "Data Not Found" });
});
// undefined route

module.exports = app;
