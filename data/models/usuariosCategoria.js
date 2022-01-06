module.exports = (sequelize, dataTypes) => {
    let alias = "UsuariosCategoria";
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
        },
    };
    let config = {
        tableName: "usuarios_categoria",
        timestamps: false
    };
    
    const UsuariosCategorias= sequelize.define(alias, cols, config);
    
    return UsuariosCategorias;
}