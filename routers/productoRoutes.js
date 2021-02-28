const express = require('express');


 const productoControllers = require('../controllers/productoController.js');

 /*Guardo la ejecución de router*/
 
 let router = express.Router();

  /*Acá van todas las rutas*/

  /*LISTADO DE TODOS LOS PRODUCTOS*/

 router.get('/', productoControllers.index)

 router.get('/detalle/:id', productoControllers.detalle);

   /*CREAR PRODUCTO*/
 router.get('/create', productoControllers.create);
 router.post('/create', productoControllers.store)

   /*EDITAR PRODUCTO*/
 router.get('/edit', productoControllers.edit); 

  /*Exporto módulo para llevarlo al entry point*/

  module.exports = router;