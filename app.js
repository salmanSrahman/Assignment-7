const express = require("express");
const app = express();
const hpp = require("hpp");
const cors = require("cors");
const helmet = require("helmet");
const router = require("./src/routes/api");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(hpp());
app.use(cors());
app.use(limiter);
app.use(helmet());
app.use(mongoSanitize());
app.use(cookieParser());
app.use(express.json());

// all security packages

app.use("/api", router);
// main route

app.use("*", (req, res) => {
  res.status(404).json({ status: "Fail", data: "Data Not Found" });
});
// undefined route

module.exports = app;
