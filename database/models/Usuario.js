const Sequelize = require('sequelize');
const db = require('../index');



const Usuario = db.define(
	"usuarios", {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
	}, {
		tableName: "Usuarios",timestamps: false
	}
);

module.exports = Usuario;