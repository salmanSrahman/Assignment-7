const express = require("express");
const router = express.Router();

const portfolioController = require("../controllers/portfolioController");

const messageController = require("../controllers/messageController");

const commentController = require("../controllers/commentController");

const blogController = require("../controllers/blogController");

const productController = require("../controllers/productController");

router.get("/portfolioCreate", portfolioController.portfolioCreate);
router.get("/portfolioRead", portfolioController.portfolioRead);
router.get("/portfolioUpdate", portfolioController.portfolioUpdate);
router.get("/portfolioDelete", portfolioController.portfolioDelete);

router.get("/messageCreate", messageController.messageCreate);
router.get("/messageRead", messageController.messageRead);
router.get("/messageUpdate", messageController.messageUpdate);
router.get("/messageDelete", messageController.messageDelete);

router.get("/commentCreate", commentController.commentCreate);
router.get("/commentRead", commentController.commentRead);
router.get("/commentUpdate", commentController.commentUpdate);
router.get("/commentDelete", commentController.commentDelete);

router.get("/productCreate", productController.productCreate);
router.get("/productRead", productController.productRead);
router.get("/productUpdate", productController.productUpdate);
router.get("/productDelete", productController.productDelete);

module.exports = router;
