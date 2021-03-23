const express = require('express');
const {check} = require("express-validator");
const path = require('path');

const uploadFile = require('../middlewares/users/multer');
const validateRegister= require('../middlewares/users/validateRegister');

  /*Guardo la ejecución de router*/
 
 let router = express.Router();

 const usuarioControllers = require('../controllers/usuarioController.js');

  /*Acá van todas las rutas*/

 router.get('/login', usuarioControllers.login);
 router.post('/login', [
    check('email').isEmail().withMessage('Introduzca un email válido'),
    check('password').isLength({min: 8}).withMessage('La contraseña debe tener como mínimo 8 caracteres')], usuarioControllers.processLogin);
 
router.get('/register', usuarioControllers.register);
router.post('/register', uploadFile.single('avatar'), validateRegister, usuarioControllers.processRegister);

  /*Exporto módulo para llevarlo al entry point*/

  module.exports = router;