const fs = require('fs');
const path = require('path');
const db = require("../data/models/");

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
    //Listado
    products: function(req, res){
        db.Productos.findAll()
            .then(function(productos){
                res.render("products", {productos, productos})
            })
    },
 // Todos los productos
    // products: function (req, res) {
    //     const newProduct =  this.update
    //     res.render("products", {products : products, newProduct});
    // },

// Detail - Detail from one product
    detail: (req, res) => {
		const id = req.params.id
		const product = products.find(product=>{
			return product.id == id
		})
		res.render('productDetail', {product : product, products})
	},
    
    productCart: function(req, res){
        res.render("productCart");
    },
    
    createProduct: function(req, res){
        res.render("createProduct", {products: products});
    },

    // Create -  Method to store
	store: (req, res) => {
        const newProduct = {
            id: products.length + 1,
            name: req.body.name,
            price: req.body.price,
            image: req.files[0].filename,
            description: req.body.description,
            discount: req.body.discount,
            gender: req.body.gender,
        };
        products.push(newProduct)
        fs.writeFileSync(productsFilePath,JSON.stringify(products,null,' '))
        res.redirect('/products')
    },

    editProduct: function(req, res){
        const id = req.params.id
        const productToEdit = products.find(product => product.id == id)
        res.render('editProduct', {productToEdit:productToEdit})
    },
    update: function(req, res){
        let id = req.params.id;
        let productToEdit = products.find(product => product.id == id)

        if(req.files[0] != undefined){
        image = req.files[0].filename
        } else {
        image = productToEdit.image
        }

        productToEdit = {
            id: productToEdit.id,
            ...req.body,
            image: image,
        };

        const newProducts = products.map(product => {
            if (product.id == productToEdit.id) {
                return product = {...productToEdit};
            }
            return product;
        })

        fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
        res.redirect('/products');
    },

    //Eliminar producto
    destroy: (req, res)=>{
        db.Productos.destroy({
            where: {id: req.params.id}
        })
        res.redirect('/products');
    }

    // Delete - Delete one product from DB
	// destroy : (req, res) => {
	// 	let id = req.params.id;
	// 	let finalProducts = products.filter(product => product.id != id);
	// 	fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
	// 	res.redirect('/products');
	// },
}

module.exports = productController;