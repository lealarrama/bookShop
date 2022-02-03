const express = require('express');
const productRouter = express.Router();
const multer = require ('multer');
const path = require ('path');
const productsValidation = require("../middlewares/productsValidation");
const productController= require("../controllers/productController");

// ************ Multer ************ 
const storage = multer.diskStorage({
    destination: (req,file, callback)=>{
        callback(null, path.join(__dirname,'../public/img/products'))
    },
    filename: (req,file, callback)=>{
        callback(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})


// /* get products page*/
productRouter.get('/', productController.products);

/* get productCart page*/
productRouter.get('/cart', productController.productCart);

/* get createProduct page*/
productRouter.get('/create', productsValidation, productController.createProduct);
productRouter.post('/create', upload.single('image'), productsValidation, productController.store);

/* get editProduct page*/
productRouter.get('/edit/:id', productsValidation, productController.editProduct);
productRouter.patch('/edit/:id', upload.single('image'), productsValidation, productController.update); 

/*** DELETE ONE PRODUCT***/ 
productRouter.delete('/delete/:id', productController.destroy); 

/* get productDetail page*/
productRouter.get('/detail/:id', productController.detail);


module.exports = productRouter;