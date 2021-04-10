

module.exports =(sequelize, dataTypes) =>{
    const Usuario = sequelize.define(
        "Usuario", {
            id: {
    
                type: dataTypes.STRING,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name: {
    
                type: dataTypes.STRING,
                
                allowNull: false,
               
            },
            email: {
                type: dataTypes.STRING,
                allowNull: false
            },
            password: {
            type:	dataTypes.STRING,
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
            foreignKey: "rol_id",
            timestamps: false
    
        })
    }
    return Usuario;
};