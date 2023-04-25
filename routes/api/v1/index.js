const express = require("express");
const pricingAPI = require("../../../controllers/pricing_api");
const router = express.Router();

router.get("/price", pricingAPI.getPrice);

module.exports = router;
