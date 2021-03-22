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
        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.pasword, 10),
            avatar: req.file.filename

        }

        User.create(userToCreate);

        return res.redirect('/usuario/login');
    },

    login: (req, res) => {
        res.render("user/login")

    },

    processLogin: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let userToLogin = User.findByField('email', req.body.email);

            if(userToLogin){
                let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
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