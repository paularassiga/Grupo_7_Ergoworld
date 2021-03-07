const express = require('express');
const multer = require("multer");
const path = require("path");
const {check} = require("express-validator");
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/images/products');
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});

const validateCrearProducto = [
  check('name').notEmpty().withMessage('Debes ingresar un nombre para el producto'),
  check('shortDescription').notEmpty().withMessage('Debes ingresar una descripcion corta'),
  check('price').notEmpty().isInt().withMessage("Debes ingresar un precio valido"),
  check('characteristic1').notEmpty().withMessage('Debes ingresar una caracteritica valida'),
  check('characteristic2').notEmpty().withMessage('Debes ingresar una caracteritica valida'),
  check('characteristic3').notEmpty().withMessage('Debes ingresar una caracteritica valida'),
  check('characteristic4').notEmpty().withMessage('Debes ingresar una caracteritica valida'),
  check('titleDescription1').notEmpty().withMessage('Debes ingresar una titulo valido'),
  check('description1').notEmpty().withMessage('Debes ingresar una descripcion validoa'),
  check('titleDescription2').notEmpty().withMessage('Debes ingresar una titulo valido'),
  check('description2').notEmpty().withMessage('Debes ingresar una descripcion validoa'),
  check('titleDescription3').notEmpty().withMessage('Debes ingresar una titulo valido'),
  check('description3').notEmpty().withMessage('Debes ingresar una descripcion validoa'),
  // check('image1').notEmpty().withMessage("Debes subir una imagen"),
  // check('image2').notEmpty().withMessage("Debes subir una imagen"),
  // check('image3').notEmpty().withMessage("Debes subir una imagen"),
  // check('image4').notEmpty().withMessage("Debes subir una imagen"),
  check('category').notEmpty().withMessage("Debes Elegir al menos una categoria"),

]

const uploadFile = multer({storage});


 const productoControllers = require('../controllers/productoController.js');

 /*Guardo la ejecución de router*/
 
 let router = express.Router();

  /*Acá van todas las rutas*/

  /*LISTADO DE TODOS LOS PRODUCTOS*/

 router.get('/', productoControllers.index)

 router.get('/detalle/:id', productoControllers.detail);

   /*CREAR PRODUCTO*/
 router.get('/crear', productoControllers.create);
 router.post('/crear', uploadFile.any(), validateCrearProducto,  productoControllers.store)

   /*EDITAR PRODUCTO*/
 router.get('/editar/:id',  productoControllers.edit); 
 router.post('/editar/:id', uploadFile.any(), validateCrearProducto,  productoControllers.edit); 

  /*Exporto módulo para llevarlo al entry point*/
  router.delete('/borrar/:id',  productoControllers.delete); 

  module.exports = router;