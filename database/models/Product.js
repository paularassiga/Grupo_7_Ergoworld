module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        shortDescription: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(10,0),
            allowNull: false
        },
        stock: {
            type: dataTypes.DECIMAL(10,0),
            allowNull: false
        },
        discount: {
            type: dataTypes.DECIMAL(10,0),
            allowNull: true
        },
        characteristic1: {
            type: dataTypes.STRING,
            allowNull: false
        },
        characteristic2: {
            type: dataTypes.STRING,
            allowNull: false
        },
        characteristic3: {
            type: dataTypes.STRING,
            allowNull: false
        },
        characteristic4: {
            type: dataTypes.STRING,
            allowNull: false
        },
        titleDescription1: {
            type: dataTypes.STRING,
            allowNull: false
        },
        description1: {
            type: dataTypes.STRING,
            allowNull: false
        },
        description2: {
            type: dataTypes.STRING,
            allowNull: false
        },
        titleDescription3: {
            type: dataTypes.STRING,
            allowNull: false
        },
        description3: {
            type: dataTypes.STRING,
            allowNull: false
        },
        image_1: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        image_2: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        image_3: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        image_4: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        tableName: 'productos',
        timestamps: false,
        deletedAt: false
    }
    const Product = sequelize.define(alias, cols, config); 

  /*   Actor.associate = function (models) {
        Actor.belongsToMany(models.Movie, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "movies",
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id',
            timestamps: false
        })
    } */

    return Product
};