/* Acá van todos los controladores/funciones que NO estén relacionados a los Usuarios de Ergoworld, por ahora, sólo HOME*/

const db = require('../database/models');
// const sequelize = db.sequelize;
const {Op} = require("sequelize");


const {validationResult} = require("express-validator");

const bcryptjs = require('bcryptjs');

const fs = require("fs");
const sequelize = db.sequelize;


/*Funciones*/

let usuarioControllers = {

    register: (req, res) => {

        res.render("user/register")

    },

    profile: (req, res) => {

        res.render("user/profile")

    },

    denied: (req, res) => {
        res.render("user/denegado")
    },

    error404: (req, res) => {
        res.render("user/404")
    },

    processRegister: async (req, res) => {
        const errors = validationResult(req);

        if (req.fileValidationError) {
            return res.render('user/register', {
                errors: {
                    formato: {
                        msg: 'Only .png, .jpg and .jpeg format allowed!'
                    }
                },
                oldData: req.body
            });
          };

        if (!errors.isEmpty()) {
            return res.render('user/register', {
                errors: errors.mapped(),
                oldData: req.body
            })
        };
        let emailExist;
        // const emailExist = User.findByField('email', req.body.email);
        try {
            emailExist = await db.Usuario.findOne({
                where: {
                    email: req.body.email
                }
            })
        } catch (error) {
            console.log("Error al corroborar el email ", error)
        }

        console.log(req.body.email);
        console.log(emailExist);

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
        let userData = req.body;
        console.log("User  Data", userData)
        await bcryptjs.hash(userData['password'], 10, async (err, palabraSecretaEncriptada) => {
            userData['password'] = palabraSecretaEncriptada;
            console.log("Nuevo Password", userData)
            console.log("test", req.file.filename);

            const userToCreate = {
                ...userData,
                avatar: req.file.filename,
                rol_id: 3

            };
            try {
                await db.Usuario.create(userToCreate);

            } catch (error) {
                console.log("error al registrar el usuario en db", error)
            }

            return res.redirect('/usuario/login');
        });




    },

    login: (req, res) => {
        res.render('user/login')

    },

    processLogin: async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('user/login', {
                errors: errors.mapped(),
                oldData: req.body
            })
        };

        let userToLogin;
        try {
            userToLogin = await db.Usuario.findOne({
                where: {
                    'email': req.body.email
                }
            });
        } catch (error) {
            console.log("fallo al validar el usuario", error)
        }

        if (userToLogin) {

            const isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);

            if (isOkThePassword) {
                console.log("Guardado en session: " + userToLogin)
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                console.log("Usuario Guardado en session: " + userToLogin)

                if (req.body.mantenerSesion == 'on') {
                    res.cookie('userEmail', userToLogin.email, {
                        maxAge: 365 * 24 * 60 * 60 * 1000 // one year
                    })
                };

                return res.redirect('/usuario/perfil');


            } else {

                return res.render('user/login', {
                    errors: {
                        password: {
                            msg: 'Datos de acceso invalidos'
                        }
                    },
                    oldData: req.body
                });

            }

        }
        return res.render('user/login', {
            errors: {
                password: {
                    msg: 'Datos de acceso invalidos'
                }
            },
            oldData: req.body
        });
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },
}

/*Exporto*/
module.exports = usuarioControllers;