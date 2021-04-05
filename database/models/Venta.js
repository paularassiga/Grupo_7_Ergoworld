const Sequelize = require('sequelize');
const db = require('../index');





const Venta = db.define(
"venta", {
    id: Sequelize.INTEGER,
    cliente_id : Sequelize.INTEGER,
    total: Sequelize.INTEGER,
    direccion_envio: Sequelize.STRING,
    pais: Sequelize.STRING,
    fecha: Sequelize.DATE,
    estado_id: Sequelize.INTEGER,
}, , {
    tableName: "Ventas"
}
)


module.exports = Venta;