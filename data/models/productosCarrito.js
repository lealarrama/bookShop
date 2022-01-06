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
    
    return ProductoCarrito;
}