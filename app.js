const app = express();
const hpp = require("hpp");
const cors = require("cors");
const helmet = require("helmet");
const multer = require("multer");
const express = require("express");
const router = require("./src/routes/api");
const cookieParser = require("cookie-parser");
const mSanitize = require("mongoose-sanitizer");
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
});

app.use(hpp());
app.use(cors());
app.use(limiter);
app.use(multer());
app.use(helmet());
app.use(mSanitize());
app.use(cookieParser());
app.use(express.json());
// all security packages

app.use("/api/v1", router);
// main route

app.use("*", (req, res) => {
  res.status(404).json({ status: "Fail", data: "Data Not Found" });
});
// undefined route

module.exports = app;
