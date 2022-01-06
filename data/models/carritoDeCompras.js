 module.exports = (sequelize, dataTypes) => {
    let alias = "CarritoCompras";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        precio_total: {
            type: dataTypes.INTEGER ,
            allowNull: false
        } ,
        cantidad_items: {
            type: dataTypes.INTEGER ,
            allowNull: false
        } ,
        usuario_id: {
            type: dataTypes.INTEGER ,
            allowNull: false
        } ,
    };
    let config = {
        tableName: "carrito_de_compras",
        timestamps: false
    };
    
    const carrito= sequelize.define(alias, cols, config);
    
    return carrito;
}