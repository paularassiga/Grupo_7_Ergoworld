const Sequelize = require('sequelize');
const db = require('../index');





const Estado = db.define(
"Estados", {
    id: Sequelize.INTEGER,
   
    nombre: Sequelize.STRING,
   
}, {
    tableName: "estados"
}
)


module.exports = Estado;