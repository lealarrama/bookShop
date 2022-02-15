const express = require('express');
const router = express.Router();
const productApiController= require("../../controllers/api/productApiController");

router.get("/", productApiController.list);
router.get("/last", productApiController.lastProduct);
router.get("/detalle/:id", productApiController.detail);

module.exports = router