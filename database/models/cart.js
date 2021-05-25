module.exports = function (sequelize, dataTypes) {
    let alias = "Cart";
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        orderNumber: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        userId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        total: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    }

    let config = {
        tableName: 'carts',
        timestamps: false,
        deletedAt: false
    }   
 
    
    let Cart = sequelize.define(alias, cols, config);
    
    Cart.associate = function (models){
        Cart.hasMany(models.Item, {
            as: "items",
            foreignKey: "cartId",
          });
          Cart.belongsTo(models.Usuario, {
            as: "user",
            foreignKey: "userId",
          });
    
    }   
    
    return Cart;
}




