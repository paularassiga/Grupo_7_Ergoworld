const path = require('path'); /*Para usar path.join*/
const fs = require("fs");
const products = require("../data/productModel.js");



/*Funciones*/

let productoControllers = {
  index: (req, res) => {
    res.render('products/products');
  },
  detalle: (req, res) => {
    res.render('products/productDetail');
  },

  create: (req, res) => {
    res.render('products/product-create-form');
  },

  store:  (req, res) => {
 console.log(req.body)
    let productos = [];
    
    let nuevoProducto = {

      id: 1,



      ...req.body
    }
    productos.push(nuevoProducto);
    console.log(productos);
    let stringProducto = JSON.stringify(productos);
     fs.writeFileSync(path.join(__dirname, '../data/productos.json'), stringProducto, function (result, error) {
      if (error) {
        res.send(error)
      }else{
        res.render('products/product-create-form', {mensage: "El producto ha sido creado correctamente"});
      }
    });


    // res.send(nuevoProducto)
    res.render('products/product-create-form');
  },


  edit: async (req, res) => {


    res.render('products/product-edit-form');

  }
}

/*Exporto*/
module.exports = productoControllers;