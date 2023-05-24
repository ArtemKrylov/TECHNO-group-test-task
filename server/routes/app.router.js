const express = require("express");
const router = express.Router();

const appController = require("../controllers/app.controller");

router.get("/shops", appController.getAll);
router.get("/products/:id", appController.getProductsByShopId);
router.post("/orders/make-order", appController.createOrder);

module.exports = router;
