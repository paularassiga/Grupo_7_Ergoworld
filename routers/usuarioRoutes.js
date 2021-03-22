const express = require('express');

 /*Requiero el módulo mainControllers para usarlo*/

 const usuarioControllers = require('../controllers/usuarioController.js');

 /*Guardo la ejecución de router*/
 
 let router = express.Router();

  /*Acá van todas las rutas*/

 router.get('/login', usuarioControllers.login);
 router.get('/register', usuarioControllers.register);

  /*Exporto módulo para llevarlo al entry point*/

  module.exports = router;