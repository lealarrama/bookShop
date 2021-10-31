const express = require('express');
const router = express.Router();

const mainControllers= require("../controllers/mainControllers");

/* GET home page. */
router.get('/', mainControllers.index);

/* GET login page. */
router.get('/login', mainControllers.login);

/* get register page*/
router.get('/register', mainControllers.register);

 /* get productDetail page*/
router.get('/productDetail', mainControllers.productDetail);

/* get productCart page*/
router.get('/productCart', mainControllers.productCart);

/* get createProduct page*/
router.get('/createProduct', mainControllers.createProduct);

/* get editProduct page*/
router.get('/editProduct', mainControllers.editProduct);



module.exports = router;

