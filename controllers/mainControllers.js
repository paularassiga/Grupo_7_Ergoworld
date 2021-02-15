
/* Acá van todos los controladores/funciones que NO estén relacionados a los productos de Ergoworld, por ahora, sólo HOME*/

const path = require('path'); /*Para usar path.join*/

/*Funciones*/

let mainControllers = {
    index: (req,res) => {

        res.render("index")
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