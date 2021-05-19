const db = require('../../database/models');



const usersAPIController = {
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
                        url: '/api/products/:id'
                    },
                    user: user //Acá faltanla URL para ver el avatar del usuario y faltaría ocultar la contraseña
                }
                res.json(respuesta);
            });
    }
    
}

module.exports = usersAPIController;