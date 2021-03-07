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
      const nuevoId = productos.length + 1;

      let nuevoProducto = {
      id: nuevoId,
      ...req.body,
      image1: req.files[0].filename,
      image2: req.files[1].filename,
      image3: req.files[2].filename,
      image4: req.files[3].filename
      };

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
  // Update - Form to edit
  edit: (req, res) => {
    let products = getAll();
    const productId = req.params.id;
    const productToEdit = products.find(e => e.id == productId);

    res.render('products/product-edit-form', {productToEdit});

  },
  // Update - Method to update
  update: (req, res) => {
		let products = getAll();
    const productId = req.params.id;
    const indexProduct = products.findIndex(e => e.id == productId);
    let detalleProducto = products.find( (productos) => productos.id == req.params.id);
    //Modifico el producto
    products[indexProduct] = {
      id: products[indexProduct].id,
      ...req.body,
      //Valido con un if ternario si el usuario subio una imagen, en caso contrario se mantiene la imagen orignal :)
      image1: req.files[0] ? req.files[0].filename : products[indexProduct].image1,
      image2: req.files[1] ? req.files[1].filename : products[indexProduct].image2,
      image3: req.files[2] ? req.files[2].filename : products[indexProduct].image3,
      image4: req.files[3] ? req.files[3].filename : products[indexProduct].image4,
    };    
    
    const stringProducto = JSON.stringify(products, null, 2);
    fs.writeFileSync(path.join(__dirname, '../data/products.json'), stringProducto);

     res.render('products/productDetail', {'detalleProducto':detalleProducto, 'message': "Producto editado con éxito"});
	},

  delete: (req, res)=> {
    let productos = getAll();

     productosActualizados = productos.filter((x) => x.id != req.params.id)

 		productosActualizadosJSON = JSON.stringify(productosActualizados, null, 2);

 		fs.writeFileSync(path.join(__dirname, '../data/products.json'), productosActualizadosJSON);

 		res.redirect('/productos/borrado-exitoso');
    },
    
    borradoExitoso:(req,res) => {

      res.render('products/borrado-exitoso')
 
    }
  }


/*Exporto*/
module.exports = productoControllers;