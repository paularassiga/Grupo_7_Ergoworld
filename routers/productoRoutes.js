const express = require('express');
const router = express.Router();

 const productoControllers = require('../controllers/productoController.js');

 // Middlewares
 const uploadFile = require('../middlewares/products/multer');
 const validateCrearProducto = require('../middlewares/products/validateProduct');

  /*Acá van todas las rutas*/

  /*LISTADO DE TODOS LOS PRODUCTOS*/
 router.get('/', productoControllers.index);
 router.get('/detalle/:id', productoControllers.detail);

   /*CREAR PRODUCTO*/
 router.get('/crear', productoControllers.create);
 router.post('/crear', uploadFile.any(), validateCrearProducto,  productoControllers.store);

   /*EDITAR PRODUCTO*/
 router.get('/editar/:id',  productoControllers.edit); 
 router.put('/editar/:id', uploadFile.any(),  productoControllers.update); 

  /*BORRAR PRODUCTO*/
  router.delete('/borrar/:id',  productoControllers.delete); 
  router.get('/borrado-exitoso', productoControllers.borradoExitoso);

  module.exports = router;