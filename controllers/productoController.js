const path = require('path'); /*Para usar path.join*/
const fs = require("fs");
const products = require("../data/productModel.js");
const {validationResult} = require("express-validator");
const {report} = require('../routers/productoRoutes.js');
const {getAll} = require('../data/productModel')

/*Funciones*/

let productoControllers = {
  index: (req, res) => {
    let productos = getAll();  

    res.render('products/products', {'productos':productos});
  },
  
  detail: (req, res) => {

    let productos = getAll();  

    let detalleProducto = productos.find( (productos) => productos.id == req.params.id);

    res.render('products/productDetail', {'detalleProducto':detalleProducto});
  },

  create: (req, res) => {
    res.render('products/product-create-form');
  },

  store: (req, res) => {
    
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let productos = getAll();     
      let nuevoId = productos.length + 1;

        let nuevoProducto = {
        id: nuevoId,
        ...req.body,
        image1: req.files[0].filename,
        image2: req.files[1].filename,
        image3: req.files[2].filename,
        image4: req.files[3].filename
      }

      productos.push(nuevoProducto);
      
      let stringProducto = JSON.stringify(productos, null, 2);
      fs.writeFileSync(path.join(__dirname, '../data/products.json'), stringProducto);
      res.render('products/product-create-form', 
      {mensage: "El producto ha sido creado correctamente"});
         
          
    } else {
      res.render('products/product-create-form', {
        oldData: req.body,
        errors: errors.mapped()
      });

    }

  },
  edit: async (req, res) => {


    res.render('products/product-edit-form');

  },

  delete: (req, res)=> {

    let productos = getAll();

    productosActualizados = productos.filter((x) => x.id != req.params.id)

		productosActualizadosJSON = JSON.stringify(productosActualizados, null, 2);

		fs.writeFileSync(path.join(__dirname, '../data/products.json'), productosActualizadosJSON);

		return res.send("El producto ha sido borrado exitosamente");
    }
  }


/*Exporto*/
module.exports = productoControllers;