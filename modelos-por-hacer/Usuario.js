const Sequelize = require('sequelize');
const db = require('../index');



const Usuario = db.define(
	"usuarios", {
		id: {

			type: Sequelize.STRING,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
		},
		apellido: {

			type: Sequelize.STRING,
			allowNull: false,
			autoIncrement: true
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false
		},
		password: {
		type:	Sequelize.STRING,
			allowNull: false
		},
	}, {
		tableName: "Usuarios",
		timestamps: false
	}
);


Usuario.associate = function(models){
	Usuario.belongsTo(models.Rol, { // models.Genre -> Genres es el valor de alias en genres.js
		as: "rol",
		foreignKey: "rol_id"
	})
}

module.exports = Usuario;