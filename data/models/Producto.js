module.exports = (sequelize, DataTypes) => {
    let alias = "Productos";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        nombre: {
            type: dataTypes.STRING ,
            allowNull: false
        } ,
        precio: {
            type: dataTypes.INTERGER ,
            allowNull: false
        } ,
        descuento: {
            type: dataTypes.INTERGER ,
            allowNull: false
        } ,
        imagen:{
            type: dataTypes.STRING ,
            allowNull: false
        } ,
        descripcion: {
            type: dataTypes.STRING ,
            allowNull: false
        },
        generos_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    };
    let config = {
        tableName: "productos",
        timestamps: false
    };
    
    const Producto = sequelize.define(alias, cols, config);
    
    return Producto;
}