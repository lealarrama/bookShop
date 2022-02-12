const { validationResult } = require('express-validator');
const path = require ('path');
const db = require("../data/models");
const sequelize = db.sequelize;
const {Op} = require("sequelize");
const Productos = db.Producto;


const productController = {
    //Listado
    products: function(req, res){
        db.Productos.findAll()
            .then(function(products){
                res.render("products" , {products: products})
            })
            .catch((err)=>{
                res.send(err)
            })
    },
 // Todos los productos
    // products: function (req, res) {
    //     const newProduct =  this.update
    //     res.render("products", {products : products, newProduct});
    // },

// Detail - Detail from one product
    // detail: (req, res) => {
	// 	const id = req.params.id
	// 	const product = products.find(product=>{
	// 		return product.id == id
	// 	})
	// 	res.render('productDetail', {product : product, products})
	// },


    detail: function(req, res){
        db.Productos.findByPk(req.params.id)
            .then(function(product){
            res.render('productDetail',{product:product})
        }).catch((err)=>{
            res.send(err)
        })
    },

    search: function(req, res){
        db.Productos.findAll({
            where:{ 
               nombre: {[Op.Like]:"%" + req.body.search + "%"}
            }
        })
        .then(products => {
            if(products.length){
                return res.render('products', {products: products});
            }
            
            else{ 
            res.redirect("/")}

        }).catch((err)=>{
            res.send(err)
        })
    },

    
    productCart: function(req, res){
    //     res.render("productCart");
        db.Productos.findAll()
            .then(products=>{
                res.render('productCart')
            })
        .catch((err)=>{
            res.send(err)
        })

    },
    createProduct: function(req, res){
        db.Productos.findAll().then(products=>{
            res.render('createProduct',{products})
        }).catch((err)=>{
            res.send(err)
        })
        // res.render("createProduct", {products: products});
    },

    // Create -  Method to store
	store: (req, res) => {
        let resultadoValidacionProduct = validationResult(req);
        if(!resultadoValidacionProduct.errors.length){
            db.Productos.create({
                nombre: req.body.name,
                precio: req.body.price,
                descuento: req.body.discount,
                imagen: req.file.filename,
                descripcion: req.body.description,
                generos_id: req.body.genre
            }).then(user => {
                    res.redirect('/products');
                }).catch((err)=>{
                    res.send(err)
                })
        }else{
            return res.render('createProduct',{
                errors:resultadoValidacionProduct.mapped(),
                oldData:req.body})
        }
        
        // const newProduct = {
        //     id: products.length + 1,
        //     name: req.body.name,
        //     price: req.body.price,
        //     image: req.files[0].filename,
        //     description: req.body.description,
        //     discount: req.body.discount,
        //     gender: req.body.gender,
        // };
        // products.push(newProduct)
        // fs.writeFileSync(productsFilePath,JSON.stringify(products,null,' '))
        // res.redirect('/products')
    },

    editProduct: function(req, res){
        const id = req.params.id
        db.Productos.findByPk(id).then(productToEdit => {
            res.render('editProduct',{productToEdit: productToEdit})
        }).catch((err)=>{
            res.send(err)
        })
        // const id = req.params.id
        // const productToEdit = products.find(product => product.id == id)
        // res.render('editProduct', {productToEdit:productToEdit})
    },
    update: async function(req, res){
        let productoId = req.params.id;
        let resultadoValidacionProduct = validationResult(req);
        if(!resultadoValidacionProduct.errors.length){
        await db.Productos.update(
            {
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                imagen: req.file.filename,
                generos_id: req.body.categoria,
                precio: req.body.precio,
                descuento: req.body.descuento
            },
            {
                where: {id: productoId}
            }).then(productToEdit=>{
            res.redirect('/products',{productToEdit:productToEdit})
        }).catch((err)=>{
            res.send(err)
        })}else{
            const id = req.params.id
        await db.Productos.findByPk(id).then(productToEdit => {
            return res.render('editProduct',{productToEdit: productToEdit,
            errors:resultadoValidacionProduct.mapped(),
            oldData:req.body})
        }).catch((err)=>{
            res.send(err)
        })
        }
        // let id = req.params.id;
        // let productToEdit = products.find(product => product.id == id)

        // if(req.files[0] != undefined){
        // image = req.files[0].filename
        // } else {
        // image = productToEdit.image
        // }

        // productToEdit = {
        //     id: productToEdit.id,
        //     ...req.body,
        //     image: image,
        // };

        // const newProducts = products.map(product => {
        //     if (product.id == productToEdit.id) {
        //         return product = {...productToEdit};
        //     }
        //     return product;
        // })

        // fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
        // res.redirect('/products');
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