const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productController = {
    products: function (req, res) {
        res.render("products", {products : products});
    },

    detail: (req, res) => {
		const id = req.params.id
		const filtrada = products.find(product=>{
			return product.id == id
		})
		res.render('productDetail', {product : filtrada})
	},

    productCart: function(req, res){
        res.render("productCart");
    },
    
    createProduct: function(req, res){
        res.render("createProduct", {products: products});
    },

    store: function (req, res) {
        const newProduct = {
			id: products.length + 1,
			name: req.body.name,
			price: req.body.price,
		    //image: req.file.filename,
            description :  req.body.description,
            discount :  req.body.discount,
            gender : req.body.gender,
		 };
        
		products.push(newProduct);
		fs.writeFileSync(productsFilePath,JSON.stringify(products,null,' '))
        res.redirect('/products')
    },

    editProduct: function(req, res){
        res.render("/");
    },
}

module.exports = productController;