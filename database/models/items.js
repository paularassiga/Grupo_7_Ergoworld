// DROP TABLE IF EXISTS `items`;
// /*!40101 SET @saved_cs_client     = @@character_set_client */;
// /*!40101 SET character_set_client = utf8 */;
// CREATE TABLE `items` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `salePrice` decimal(10,2) DEFAULT NULL,
//   `quantity` int(11) DEFAULT NULL,
//   `subtotal` decimal(10,2) DEFAULT NULL,
//   `state` tinyint(4) DEFAULT NULL,
//   `userId` int(11) DEFAULT NULL,
//   `productId` int(11) DEFAULT NULL,
//   `cartId` int(11) DEFAULT NULL,
//   `createdAt` timestamp NULL DEFAULT NULL,
//   `updatedAt` timestamp NULL DEFAULT NULL,
//   `deletedAt` timestamp NULL DEFAULT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=latin1;




// DROP TABLE IF EXISTS `carts`;
// /*!40101 SET @saved_cs_client     = @@character_set_client */;
// /*!40101 SET character_set_client = utf8 */;
// CREATE TABLE `carts` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `orderNumber` int(11) DEFAULT NULL,
//   `total` decimal(10,2) DEFAULT NULL,
//   `userId` int(11) DEFAULT NULL,
//   `createdAt` timestamp NULL DEFAULT NULL,
//   `updatedAt` timestamp NULL DEFAULT NULL,
//   `deletedAt` timestamp NULL DEFAULT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=latin1;




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