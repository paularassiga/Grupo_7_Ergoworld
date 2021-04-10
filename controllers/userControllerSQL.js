/* Acá van todos los controladores/funciones que NO estén relacionados a los Usuarios de Ergoworld, por ahora, sólo HOME*/
const express = require('express');
const cookieParser = require('cookie-parser');

const {
    validationResult
} = require("express-validator");

const User = require('../data/userModel')

const bcryptjs = require('bcryptjs');


/*Funciones*/

let usuarioControllers = {

    register: (req, res) => {

        res.render("user/register")

    },

    profile: (req, res) => {

        res.render("user/profile")

    },

    denied: (req,res) => {
        res.render("user/denegado")
    },

    processRegister: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('user/register', {
                errors: errors.mapped(),
                oldData: req.body
            })
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
            
            avatar: req.file.filename

        };

        User.create(userToCreate);

        return res.redirect('/usuario/login');

    },

    login: (req, res) => {
        res.render('user/login')

    },

    processLogin: (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('user/login', {
                errors: errors.mapped(),
                oldData: req.body
            })
        };

        const userToLogin = User.findByField('email', req.body.email);       

        if(userToLogin) {         

            const isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);

            if(isOkThePassword){

                delete userToLogin.password;
				req.session.userLogged = userToLogin;

                if (req.body.mantenerSesion == 'on') {
                    res.cookie('userEmail', userToLogin.email, {
                        maxAge:  365 * 24 * 60 * 60 * 1000 // one year
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