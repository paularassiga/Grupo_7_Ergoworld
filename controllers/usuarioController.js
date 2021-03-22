
/* Acá van todos los controladores/funciones que NO estén relacionados a los productos de Ergoworld, por ahora, sólo HOME*/

const path = require('path'); /*Para usar path.join*/
const fs = require("fs");
const products = require("../data/productModel.js");
const {validationResult} = require("express-validator");
const {report} = require('../routers/productoRoutes.js');
const {getAll} = require('../data/productModel')

/*Funciones*/

let usuarioControllers = {
    login: (req,res) => {
        res.render("user/login")

    },
    register: (req,res) => {

        res.render("user/register")

    }
}

/*Exporto*/
module.exports = usuarioControllers;