const express = require('express');
const multer = require("multer")
const path = require("path")
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/images/')
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});

const uploadFile = multer({storage})


 const productoControllers = require('../controllers/productoController.js');

 /*Guardo la ejecución de router*/
 
 let router = express.Router();

  /*Acá van todas las rutas*/

  /*LISTADO DE TODOS LOS PRODUCTOS*/

 router.get('/', productoControllers.index)

 router.get('/detalle/:id', productoControllers.detalle);

   /*CREAR PRODUCTO*/
 router.get('/crear', productoControllers.create);
 router.post('/crear', uploadFile.any(),  productoControllers.store)

   /*EDITAR PRODUCTO*/
 router.get('/editar', productoControllers.edit); 

  /*Exporto módulo para llevarlo al entry point*/

  module.exports = router;