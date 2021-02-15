

const path = require('path'); /*Para usar path.join*/

/*Funciones*/

let productoControllers = {
    detalle: (req,res) => {
        res.render('products/productDetail');
    },

    create: (req, res) => {
		res.render('products/product-create-form');
	},

    edit: (req, res) => {
		res.render('products/product-edit-form');

	}
}

/*Exporto*/
module.exports = productoControllers;