const express = require('express');
const router = express.Router();

 const productoControllers = require('../controllers/productoController.js');

 // Middlewares
 const uploadFile = require('../middlewares/products/multer');
 const validateCrearProducto = require('../middlewares/products/validateProduct');
 const validateEditProducto = require('../middlewares/products/validateEditProduct');
 const userNoLoggenIn = require('../middlewares/users/userNoLoggedIn');

  /*Acá van todas las rutas*/

  /*LISTADO DE TODOS LOS PRODUCTOS*/
 router.get('/', productoControllers.index);
 router.get('/detalle/:id', productoControllers.detail);

   /*CREAR PRODUCTO*/
 router.get('/crear', userNoLoggenIn, productoControllers.create);
 router.post('/crear', uploadFile.any(), validateCrearProducto,  productoControllers.store);

   /*EDITAR PRODUCTO*/
 router.get('/editar/:id', userNoLoggenIn,  productoControllers.edit); 
 router.put('/editar/:id', uploadFile.any(), validateEditProducto,  productoControllers.update); 

  /*BORRAR PRODUCTO*/
  router.delete('/borrar/:id', userNoLoggenIn,  productoControllers.delete); 
  router.get('/borrado-exitoso', productoControllers.borradoExitoso);

  module.exports = router;