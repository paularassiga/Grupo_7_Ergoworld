
/* Acá van todos los controladores/funciones que NO estén relacionados a los productos de Ergoworld, por ahora, sólo HOME*/

const path = require('path'); /*Para usar path.join*/

/*Funciones*/

let mainControllers = {
    index: (req,res) => {

        res.render("index")
    },
    login: (req,res) => {
        res.render("login")

    },
    register: (req,res) => {

        res.render("register")

    },
    productCart: (req,res) => {

        res.render("productCart")

    },
    productDetail: (req,res) => {


        res.render("productDetail")

    }
}

/*Exporto*/
module.exports = mainControllers;