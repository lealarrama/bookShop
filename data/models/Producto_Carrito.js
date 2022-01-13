module.exports = (sequelize, dataTypes) => {
    let alias = "ProductosCarrito";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        producto: {
            type: dataTypes.STRING ,
            allowNull: false
        } ,
        productos_id: {
            type: dataTypes.INTEGER ,
            allowNull: false
        } ,
        carrito_id: {
            type: dataTypes.INTEGER ,
            allowNull: false
        } ,
    };
    let config = {
        tableName: "productos_carrito",
        timestamps: false
    };
    
    const ProductoCarrito= sequelize.define(alias, cols, config);


    // ProductoCarrito.associate = function(models) {
    //     ProductoCarrito.belongsToMany(models.Producto, { 
    //         as: "Productos", 
    //         through:" productos_carrito",  
    //         foreignKey: "productos_id",
    //         otherKey:"carrito_id",
    //         timestamps:false 
    //     });
    // }

    
    return ProductoCarrito;
}