// const path = require('path');
const {check} = require("express-validator");

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
  
  ];

  module.exports = validateCrearProducto; 