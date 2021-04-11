const path = require('path'); /*Para usar path.join*/
const fs = require("fs");
const {validationResult} = require("express-validator");
//const {report} = require('../routers/productoRoutes.js');
const Product = require('../data/productModel')

const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

/*Funciones*/

let productoControllers = {
  index: (req, res) => {
     db.Product.findAll({
      include: [ {association: 'categoria'} ]
  })
      .then(productos => {
          res.render('products/products', {productos})
      });
  },
  detail: (req, res) => {
    db.Product.findByPk(req.params.id)
      .then(detalleProducto => {
          res.render('products/productDetail', {detalleProducto});
      });
  },
  create: (req, res) => {
    res.render('products/product-create-form');
  },
  store: (req, res) => {
    
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      
      let producToCreate = {
        ...req.body,
        image_1: req.files[0].filename,
        image_2: req.files[1].filename,
        image_3: req.files[2].filename,
        image_4: req.files[3].filename
    };
      db.Product.create(producToCreate)
        .then(() => {
            res.redirect('/productos');
        });           
      }  else {
      res.render('products/product-create-form', {
        oldData: req.body,
        errors: errors.mapped()
      });

    }
  },
  // Update - Form to edit
  edit: (req, res) => { 

    db.Product.findByPk(req.params.id)
    .then(productToEdit => {
        res.render('products/product-edit-form', {productToEdit});
    });

  },
  // Update - Method to update
  update: (req, res) => {
    
		//  let products = Product.getAll();
    const productId = req.params.id;
  
    db.Product.update(
            {
              ...req.body,
              image_1: req.files.filter((e)  => {
                return e.fieldname == "image_1"
                 }).map(e => e.filename).toString() || undefined,
              image_2: req.files.filter((e)  => {
                return e.fieldname == "image_2"
                 }).map(e => e.filename).toString() || undefined,
              image_3: req.files.filter((e)  => {
                return e.fieldname == "image_3"
                 }).map(e => e.filename).toString() || undefined,
              image_4: req.files.filter((e)  => {
                return e.fieldname == "image_4"
                 }).map(e => e.filename).toString() || undefined,
            },
            {
                where: {id: productId}
            })
        .then(()=> {
            return res.redirect('/productos/detalle/' + productId)})            
        .catch(error => res.send(error))
  
	},

  delete: (req, res)=> {

    db.Product.destroy({
      where:{
        id: req.params.id
      } 
    })

 		res.redirect('/productos/borrado-exitoso');
    
  },
    
    borradoExitoso:(req,res) => {

      res.render('products/borrado-exitoso')
 
    }
  }


/*Exporto*/
module.exports = productoControllers;