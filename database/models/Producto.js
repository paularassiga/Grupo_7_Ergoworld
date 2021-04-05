const Sequelize = require('sequelize');
const db = require('../index');





const Producto = db.define(
"producto", {
    id: Sequelize.INTEGER,
    precio : Sequelize.INTEGER,
    descuento: Sequelize.INTEGER,
    total: Sequelize.STRING,
    cantidad: Sequelize.STRING,
    fecha: Sequelize.DATE,
    forma_de_pago_id: Sequelize.INTEGER,
    producto_id: Sequelize.INTEGER,
}, , {
    tableName: "producto"
}
)


module.exports = Producto;