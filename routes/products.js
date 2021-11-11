const express = require('express');
const productRouter = express.Router();

const productController= require("../controllers/productController");

// /* get products page*/
// productRouter.get('/products', productController.products);

/* get productDetail page*/
productRouter.get('/detail', productController.productDetail);

/* get productCart page*/
productRouter.get('/cart', productController.productCart);

/* get createProduct page*/
productRouter.get('/create', productController.createProduct);

/* get editProduct page*/
productRouter.get('/edit', productController.editProduct);

module.exports = productRouter;