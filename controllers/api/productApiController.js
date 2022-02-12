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
                productos: {productos}
            }})
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
                lastProduct: req.params.id,
                productos: {
                    id: productos.id,
                    nombre: productos.nombre,
                    precio: productos.precio,
                    descuento: productos.descuento,
                    imagen: productos.imagen,
                    descripcion: productos.descripcion,
                }
                }
            })
        })
    }, 
    lastProduct: (req,res)=>{
        DB.Productos
        .findOne( { 
            where: {
                id: {[DB.Sequelize.Op.gt] : id}
            },
            order: [
            ['id', 'DESC']
            ],
        })
        .then(productos => {
            return res.json({
                meta: {
                    status : 200,
                    url: 'api/products/last'
                },
                data:{
                    product: {productos}
                }
            })
        })
    }
}
