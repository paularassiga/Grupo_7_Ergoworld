const path = require('path'); /*Para usar path.join*/
const fs = require("fs");
const products = require("../data/productModel.js");
const {validationResult} = require("express-validator");
const {report} = require('../routers/productoRoutes.js');
const {getAll} = require('../data/productModel')

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
    const productToEdit = products.find(e => e.id == productId);
    console.log(productToEdit);

   
    console.log(productToEdit);
		//const iP = products.findIndex(e => e.id == idProducto )
/* 
		products[iP].name = req.body.name;
		products[iP].price = req.body.price;
		products[iP].discount = req.body.discount;
		products[iP].category = req.body.category;
		products[iP].description = req.body.description;

		const producString = JSON.stringify(products, null, 2);
		fs.writeFileSync(productsFilePath, producString); */
		res.send('modificado con exito');
		
	},

  delete: (req, res)=> {
    let productos = getAll();
    const deletedId = req.params.id;
    const producto = productos.filter(producto => producto.id != deletedId);
    let productoGuardar = JSON.stringify(producto,null,2)
    fs.writeFileSync(path.join(__dirname, '../data/products.json'), stringProducto, function (result, error) {
     
      if (error) {
        console.log("Error");
        console.log(error);
        res.render('products/index', {
          errors: "Error al guardar lista de productos"
        });
      } else {
        console.log('Producto Eliminado Correctamente');

      }})
    res.redirect('/index');
    }}


/*Exporto*/
module.exports = productoControllers;