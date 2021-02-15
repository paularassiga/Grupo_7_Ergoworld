

const path = require('path'); /*Para usar path.join*/

/*Funciones*/

let productoControllers = {
    detalle: (req,res) => {
        res.render('products/productDetail');
    }
}

/*Exporto*/
module.exports = productoControllers;