const Sequelize = require('sequelize');
const db = require('../index');





const Rol = db.define(
"roles", {
    id: Sequelize.INTEGER,
   
    nombre: Sequelize.STRING,
   
}, {
    tableName: "roles"
}
)


module.exports = Rol;