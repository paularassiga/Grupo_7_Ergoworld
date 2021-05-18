




module.exports = function (sequelize, dataTypes) {
    let alias = "Item";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        salePrice: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },

        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        subtotal: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },

        state: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        productId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        cartId: {
            type: dataTypes.INTEGER,
        },

    }




    let Item = sequelize.define(alias, cols);
    Item.associate = function (models) {
        Item.belongsTo(models.Cart, {
            as: "cart",
            foreignKey: "cartId",
        });

        Item.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "userId",
        });

        Item.belongsTo(models.Product, {
            as: "product",
            foreignKey: "productId",
        });


    }

    return Item;
}