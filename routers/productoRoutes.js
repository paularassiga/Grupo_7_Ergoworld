const express = require('express');
const multer = require("multer");
const path = require("path");
const {check} = require("express-validator");
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/images/');
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});

const validateCrearProducto = [
  check('name').notEmpty().withMessage('Debes ingresar un nombre para el producto'),
  check('short-description').notEmpty().withMessage('Debes ingresar una descripcion corta'),
  check('price').notEmpty().isInt().withMessage("Debes ingresar un precio valido"),
  check('characteristic-1').notEmpty().withMessage('Debes ingresar una caracteritica valida'),
  check('characteristic-2').notEmpty().withMessage('Debes ingresar una caracteritica valida'),
  check('characteristic-3').notEmpty().withMessage('Debes ingresar una caracteritica valida'),
  check('characteristic-4').notEmpty().withMessage('Debes ingresar una caracteritica valida'),
  check('title-description-1').notEmpty().withMessage('Debes ingresar una titulo valido'),
  check('description-1').notEmpty().withMessage('Debes ingresar una descripcion validoa'),
  check('title-description-2').notEmpty().withMessage('Debes ingresar una titulo valido'),
  check('description-2').notEmpty().withMessage('Debes ingresar una descripcion validoa'),
  check('title-description-3').notEmpty().withMessage('Debes ingresar una titulo valido'),
  check('description-3').notEmpty().withMessage('Debes ingresar una descripcion validoa'),
  check('title-description-4').notEmpty().withMessage('Debes ingresar una titulo valido'),
  check('description-4').notEmpty().withMessage('Debes ingresar una descripcion validoa'),
  check('image-1').notEmpty().withMessage("Debes subir una imagen"),
  check('image-2').notEmpty().withMessage("Debes subir una imagen"),
  check('image-3').notEmpty().withMessage("Debes subir una imagen"),
  check('image-4').notEmpty().withMessage("Debes subir una imagen"),
  check('category').notEmpty().withMessage("Debes Elegir al menos una categoria"),

]






const uploadFile = multer({storage});


 const productoControllers = require('../controllers/productoController.js');

 /*Guardo la ejecución de router*/
 
 let router = express.Router();

  /*Acá van todas las rutas*/

  /*LISTADO DE TODOS LOS PRODUCTOS*/

 router.get('/', productoControllers.index)

 router.get('/detalle/:id', productoControllers.detalle);

   /*CREAR PRODUCTO*/
 router.get('/crear', productoControllers.create);
 router.post('/crear', uploadFile.any(), validateCrearProducto,  productoControllers.store)

   /*EDITAR PRODUCTO*/
 router.get('/editar', productoControllers.edit); 

  /*Exporto módulo para llevarlo al entry point*/

  module.exports = router;