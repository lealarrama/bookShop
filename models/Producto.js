module.exports = (sequelize, DataTypes) => {
    let alias = "Productos";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        nombre: {
            type: DataTypes.STRING ,
            allowNull: false
        } ,
        precio: {
            type: DataTypes.INTERGER ,
            allowNull: false
        } ,
        descuento: {
            type: DataTypes.INTERGER ,
            allowNull: false
        } ,
        imagen:{
            type: DataTypes.STRING ,
            allowNull: false
        } ,
        descripcion: {
            type: DataTypes.STRING ,
            allowNull: false
        }
    };
    let config = {
        tableName: "productos",
        timestamps: false
    };
    
    const Producto = sequelize.define(alias, cols, config);
    
    return Producto;
}