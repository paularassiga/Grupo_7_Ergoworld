const Sequelize = require('sequelize');
const db = require('../index');





const Categoria = db.define(
"Categoria", {
    id: Sequelize.INTEGER,
   
    nombre: Sequelize.STRING,
   
}, {
    tableName: "categorias"
}
)


module.exports = Categoria;