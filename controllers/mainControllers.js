
/* Acá van todos los controladores/funciones que NO estén relacionados a los productos de Ergoworld, por ahora, sólo HOME*/

const path = require('path'); /*Para usar path.join*/
const fs = require("fs");
const products = require("../data/productModel.js");
const {validationResult} = require("express-validator");
const {report} = require('../routers/productoRoutes.js');
const {getAll} = require('../data/productModel')
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


/*Funciones*/

let mainControllers = {
    index: (req,res) => {
        db.Product.findAll({
            include: [ {association: 'categoria'} ]
        })
            .then(productos => {
                res.render('products/products', {productos})
            });
    },
    
    login: (req,res) => {
        res.render("user/login")

    },
    register: (req,res) => {

        res.render("user/register")

    },
    productCart: (req,res) => {

        res.render("products/productCart")

    },
    productDetail: (req,res) => {


        res.render("products/productDetail")

    }
}

/*Exporto*/
module.exports = mainControllers;