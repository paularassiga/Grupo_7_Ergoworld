const express = require('express');
const {check} = require("express-validator");
const path = require('path');

const uploadFile = require('../middlewares/users/multer');
const validateRegister= require('../middlewares/users/validateRegister');
const validateLogin = require('../middlewares/users/validateLogin');
const userLoggenIn = require('../middlewares/users/userLoggedIn');
const userNoLoggenIn = require('../middlewares/users/userNoLoggedIn');

  /*Guardo la ejecución de router*/
 
 let router = express.Router();

 const usuarioControllers = require('../controllers/usuarioController.js');

  /*Acá van todas las rutas*/

 router.get('/login', userLoggenIn, usuarioControllers.login);
 router.post('/login', validateLogin, usuarioControllers.processLogin);

 router.get('/perfil', userNoLoggenIn, usuarioControllers.profile);
 
router.get('/register', userLoggenIn, usuarioControllers.register);
router.post('/register', uploadFile.single('avatar'), validateRegister, usuarioControllers.processRegister);

// Logout
router.get('/logout/', usuarioControllers.logout);

  /*Exporto módulo para llevarlo al entry point*/

  module.exports = router;