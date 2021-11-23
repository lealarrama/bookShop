const express = require('express');
const productRouter = express.Router();
const multer = require ('multer');
const path = require ('path');


const productController= require("../controllers/productController");

// ************ Multer ************ 
const storage = multer.diskStorage({
    destination: (req,file, callback)=>{
        callback (null, path.join(__dirname,'../public/img/products'))
    },
    filename: (req,file, callback)=>{
        callback (null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})

// /* get products page*/
productRouter.get('/', productController.products);

/* get productCart page*/
productRouter.get('/cart', productController.productCart);

/* get createProduct page*/
productRouter.get('/create', productController.createProduct);
productRouter.post('/', upload.any('image'), productController.store);

/* get editProduct page*/
productRouter.get('/edit/:id', productController.editProduct);
productRouter.patch('/edit/:id', upload.any(), productController.update); 

/*** DELETE ONE PRODUCT***/ 
productRouter.delete('/delete/:id', productController.destroy); 

/* get productDetail page*/
productRouter.get('/detail/:id', productController.detail);


module.exports = productRouter;