module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING,
        },
        contraseña: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        imagen: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        categorias_id: {
            type: dataTypes.INTEGER,
        }
    };
    let config = {
        tableName: 'usuarios',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config)

    // User.associate = models => {
    //     User.belongsTo(models.Genre, {
    //     as: 'generos',
    //     foreignKey:'genre_id'})
        
    //     Movie.belongsToMany(models.Actor,{
    //         as: 'actores',
    //         through: 'actor_movie',
    //         foreignKey: 'genre_id',
    //         otherKey: 'actor_id',
    //         timestamps: false,
    //     })
    //     }

    return User
}