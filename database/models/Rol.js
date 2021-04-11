

module.exports =(sequelize, dataTypes) =>{
    const Rol = sequelize.define(
        "Rol", {
            id: {
    
                type: dataTypes.STRING,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name: {
                type: dataTypes.STRING,
                allowNull: false
            },
            
        }, {
            tableName: "roles",
            timestamps: false
        }
    );
    Rol.associate = function (models) {
        Rol.hasMany(models.Usuario, { 
            as: "usuarios",
            foreignKey: 'rol_id',
            timestamps: false
        });
    };
   
    return Rol;
};