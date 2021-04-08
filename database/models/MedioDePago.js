const Sequelize = require('sequelize');
const db = require('../index');





const MedioDePago = db.define(
"MedioDePago", {
    id: Sequelize.INTEGER,
   
    nombre: Sequelize.STRING,
   
}, {
    tableName: "medioDePago"
}
)


module.exports = MedioDePago;