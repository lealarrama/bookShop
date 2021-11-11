const express = require('express');
const productRouter = express.Router();


const productController= require("../controllers/productController");

// /* get products page*/
productRouter.get('/', productController.products);

/* get productDetail page*/
productRouter.get('/detail', productController.detail);

/* get productCart page*/
productRouter.get('/cart', productController.productCart);

/* get createProduct page*/
productRouter.get('/create', productController.createProduct);
productRouter.post('/', productController.store);

/* get editProduct page*/
productRouter.get('/edit', productController.editProduct);


module.exports = productRouter;