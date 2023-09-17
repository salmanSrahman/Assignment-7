const express = require("express");
const router = express.Router();

const portfolioController = require("../controllers/portfolioController");

const messageController = require("../controllers/messageController");

router.get("/portfolioCreate", portfolioController.portfolioCreate);
router.get("/portfolioRead", portfolioController.portfolioRead);
router.get("/portfolioUpdate", portfolioController.portfolioUpdate);
router.get("/portfolioDelete", portfolioController.portfolioDelete);

router.get("/messageCreate", messageController.messageCreate);
router.get("/messageRead", messageController.messageRead);
router.get("/messageUpdate", messageController.messageUpdate);
router.get("/messageDelete", messageController.messageDelete);


module.exports = router;
