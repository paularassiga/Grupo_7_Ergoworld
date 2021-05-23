const db = require('../../database/models');



const usersAPIController = {


    'ultimoUsuarioCreado':(req, res)=>{
        const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;  
        db.Usuario.findAll({
            limit: 1,
            order: [ [ 'id','DESC' ]],
        
            })
            .then(usuario => {
                //console.log(usuario)
                let respuesta = {
                    meta: {
                        status: 200,
                        url: 'api/users/ultimoUsuarioCreado'
                    },
                    count: 1,
                    countByCategory: "FALTA TERMINAR ESTO",
                    usuario: usuario.map(user => {
                        return{
                            id: user.id,
                            name: user.name,
                            last_name: user.last_name,
                            email: user.email,
                            avatar: '/images/avatars/'+ user.avatar,
                            //Falta el array con principal relación de uno a muchos con categorias
                            detail: `${fullUrl}/${user.id}`
                        }
                    }) //Acá faltan poner las relaciones con la categoria y la URL para ver el detalle del producto.
                }
                res.json(respuesta);
            })
    },

    'list': (req, res) => {
        const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        db.Usuario.findAll()
        .then(users => {
            users.map(usuario =>{
                usuario.password = undefined;
                return usuario
            })
            let respuesta = {
                meta: {
                    status : 200,
                    url: 'api/users'
                },
                count: users.length,
                users: users.map(user => {
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        detail: `${fullUrl}/${user.id}`
                    }
                }) //Acá falta agregar la URL para ver el detalle del usuario.
            }
                res.json(respuesta);
            })

    },
    
    'detail': (req, res) => {
        db.Usuario.findByPk(req.params.id)
            .then(user => {
                user.password = undefined;

                let respuesta = {

                    meta: {
                        status: 200,
                        url: '/api/users/:id'
                    },
                    user: user //Acá faltanla URL para ver el avatar del usuario y faltaría ocultar la contraseña
                }
                res.json(respuesta);
            });
    }
}

module.exports = usersAPIController;