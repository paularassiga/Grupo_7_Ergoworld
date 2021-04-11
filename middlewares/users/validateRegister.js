// const path = require('path');
const {check} = require("express-validator");

const validateRegister = [
    check('name').notEmpty().withMessage('Debes ingresar un nombre'),
    check('last_name').notEmpty().withMessage('Debes ingresar un apellido'),
    check('email')
        .notEmpty().withMessage('Debes ingresar un email').bail()
        .isEmail().withMessage('Debes ingresar un formato de email válido'),
    check('password')
        .notEmpty().withMessage('Debes ingresar una contraseña').bail()
        .isLength({min: 8}).withMessage('Debes ingresar una contraseña con 8 caractéres como mínimo'),
  ];

  module.exports = validateRegister; 