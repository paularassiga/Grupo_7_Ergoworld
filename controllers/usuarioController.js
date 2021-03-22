/* Acá van todos los controladores/funciones que NO estén relacionados a los Usuarios de Ergoworld, por ahora, sólo HOME*/

const path = require('path'); /*Para usar path.join*/
const fs = require("fs");
const usuarios = require("../data/productModel.js");
const {
    validationResult
} = require("express-validator");
const {
    report
} = require('../routers/UsuarioRoutes.js');
const {
    getAll
} = require('../data/productModel')

/*Funciones*/

let usuarioControllers = {
    login: (req, res) => {
        res.render("user/login")

    },
    register: (req, res) => {


        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let usuarios = getAll();
            const nuevoId = usuarios.length + 1;

            let nuevoUsuario = {
                id: nuevoId,
                ...req.body,

            };

            usuarios.push(nuevoUsuario);

            let stringUsuario = JSON.stringify(usuarios, null, 2);
            fs.writeFileSync(path.join(__dirname, '../data/users.json'), stringUsuario);
            res.render('user/register.ejs', {
                mensage: "El Usuario ha sido creado correctamente"
            });
        } else {
            res.render('user/register.ejs', {
                oldData: req.body,
                errors: errors.mapped()
            });

        }

        res.render("user/register")

    },


    update: (req, res) => {
        let usuarios = getAll();
        const usuariostId = req.params.id;
        const indexUser = usuarios.findIndex(e => e.id == usuariostId);
        let detalleUsuario = usuarios.find((usuario) => usuario.id == req.params.id);
        //Modifico el Usuario
        usuarios[indexUser] = {
            id: usuarios[indexUser].id,
            ...req.body,
        };

        const stringUsuario = JSON.stringify(usuarios, null, 2);
        fs.writeFileSync(path.join(__dirname, '../data/user.json'), stringUsuario);

        res.render('usuarios/userDetail', {
            'detalleUsuario': detalleUsuario,
            'message': "Usuario editado con éxito, actualiza para ver los cambios."
        });
    },

    delete: (req, res) => {
        let usuarios = getAll();

        usuariosActualizados = usuarios.filter((x) => x.id != req.params.id)

        usuariosActualizadosJSON = JSON.stringify(usuariosActualizados, null, 2);

        fs.writeFileSync(path.join(__dirname, '../data/users.json'), usuariosActualizadosJSON);

        res.redirect('/user/usuario');
    },

    








}

/*Exporto*/
module.exports = usuarioControllers;