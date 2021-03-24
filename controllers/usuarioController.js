/* Acá van todos los controladores/funciones que NO estén relacionados a los Usuarios de Ergoworld, por ahora, sólo HOME*/


const {validationResult} = require("express-validator");

const User = require('../data/userModel')

const bcryptjs = require('bcryptjs');


/*Funciones*/

let usuarioControllers = {

    register: (req, res) => {

        res.render("user/register")

    },

    processRegister: (req,res) =>{
        const errors = validationResult(req);
        
        if(!errors.isEmpty()){
            return res.render('user/register', {errors:errors.mapped(), oldData: req.body})
        };
        
        const emailExist = User.findByField('email', req.body.email);

        if (emailExist) {
			return res.render('user/register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		};

            const userToCreate = {
                ...req.body,
                password: bcryptjs.hashSync(req.body.password, 10),
                avatar: req.file.filename
    
            };
    
            User.create(userToCreate);
    
            return res.redirect('/usuario/login');
        
    },

    login: (req, res) => {
        res.render("user/login")

    },

    processLogin: (req, res) => {
        let userToLogin;
        let errors = validationResult(req);
        if(errors.isEmpty()){
             userToLogin = User.findByField('email', req.body.email);
            console.log("Usuario Logueado:" )
            console.log(userToLogin)
            if(userToLogin){
                let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin['password']);
                if(isOkThePassword){
                    return res.redirect('/')
                }
                return res.render('user/login',{
                    errors:{
                        password:{
                            msg: 'La contraseña es incorrecta'
                        }
                    }
                })
            }

            return res.render('user/login', {
                errors:{
                    email:{
                        msg: 'No se encuentra este email en nuestra base de datos'
                    }
                }
            });

        } else {
            return res.render ('user/login.ejs', {errors: errors.mapped()});
        }
       
    },
}

/*Exporto*/
module.exports = usuarioControllers;