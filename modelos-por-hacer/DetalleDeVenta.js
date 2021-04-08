const Sequelize = require('sequelize');
const db = require('../index');





const DetalleVenta = db.define(
"detalle_venta", {
    id: Sequelize.INTEGER,
    precio : Sequelize.INTEGER,
    descuento: Sequelize.INTEGER,
    total: Sequelize.STRING,
    cantidad: Sequelize.STRING,
    fecha: Sequelize.DATE,
    forma_de_pago_id: Sequelize.INTEGER,
    producto_id: Sequelize.INTEGER,
}, , {
    tableName: "detalles_ventas"
}
)


module.exports = DetalleVenta;