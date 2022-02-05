const DB = require("../../data/models");
const {Op} = require("sequelize");

module.exports = { 
    list: (req,res) => {
        DB.Productos
        .findAll({
            include: ["generos"]
        }).then(productos => {
            return res.json({
                meta: {
                    status : 200,
                    url: 'api/products'
                },
                data : {
                count: productos.length,
                // countByCategory: productos.generos.name,
                products: {productos}
                }
            })
        })
    },
    detail: (req,res) => {
        DB.Productos
        .findByPk(req.params.id, {include :["generos"]}).then(productos => {
            return res.json({
                meta: {
                    status : 200,
                    url: 'api/products/:id'
                },
                data : {
                // imagen: productos.imagen,
                product: {productos}
                }
            })
        })
    }, 
}
