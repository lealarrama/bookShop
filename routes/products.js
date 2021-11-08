const express = require('express');
const productRouter = express.Router();

const productController= require("../controllers/productController");

// /* get products page*/
// productRouter.get('/products', productController.products);

/* get productDetail page*/
productRouter.get('/productDetail', productController.productDetail);

/* get productCart page*/
productRouter.get('/productCart', productController.productCart);

/* get createProduct page*/
productRouter.get('/createProduct', productController.createProduct);

/* get editProduct page*/
productRouter.get('/editProduct', productController.editProduct);

module.exports = productRouter;