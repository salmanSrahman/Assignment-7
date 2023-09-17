const express = require("express");
const router = express.Router();

const portfolioController = require("../controllers/portfolioController");

router.get("/portfolioCreate", portfolioController.portfolioCreate);
router.get("/portfolioRead", portfolioController.portfolioRead);
router.get("/portfolioUpdate", portfolioController.portfolioUpdate);
router.get("/portfolioDelete", portfolioController.portfolioDelete);


module.exports = router;
