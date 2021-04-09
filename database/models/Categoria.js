module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        tableName: 'categorias',
        timestamps: false,
        deletedAt: false
    };

    const Categoria = sequelize.define(alias, cols, config); 

    Categoria.associate = function (models) {
        Categoria.hasMany(models.Product, { 
            as: "productos",
            foreignKey: 'category_id',
            timestamps: false
        })
    };


    return Categoria
};