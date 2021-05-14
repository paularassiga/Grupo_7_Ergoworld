// const path = require('path');
const {check} = require("express-validator");
const path = require('path');

const validateCrearProducto = [
    check('name').notEmpty().withMessage('Debes ingresar un nombre para el producto').isLength({ min: 5 }).withMessage('Debes ingresar un nombre para el producto con 5 caractéres como mínimo'),
    check('shortDescription').notEmpty().withMessage('Debes ingresar una descripcion corta'),
    check('price').notEmpty().isInt().withMessage("Debes ingresar un precio valido"),
    check('stock').notEmpty().isInt().withMessage("Debes ingresar la cantidad de stock disponible"),
    check('characteristic1').notEmpty().withMessage('Debes ingresar una caracteritica valida'),
    check('characteristic2').notEmpty().withMessage('Debes ingresar una caracteritica valida'),
    check('characteristic3').notEmpty().withMessage('Debes ingresar una caracteritica valida'),
    check('characteristic4').notEmpty().withMessage('Debes ingresar una caracteritica valida'),
    check('titleDescription1').notEmpty().withMessage('Debes ingresar una titulo valido'),
    check('description1').notEmpty().withMessage('Debes ingresar una descripción para el producto').isLength({ min: 20 }).withMessage('Debes ingresar una descripcion valida de 20 caractéres como mínimo'),
    check('titleDescription2').notEmpty().withMessage('Debes ingresar una titulo valido'),
    check('description2').notEmpty().withMessage('Debes ingresar una descripción para el producto').isLength({ min: 20 }).withMessage('Debes ingresar una descripcion valida de 20 caractéres como mínimo'),
    check('titleDescription3').notEmpty().withMessage('Debes ingresar una titulo valido'),
    check('description3').notEmpty().withMessage('Debes ingresar una descripción para el producto').isLength({ min: 20 }).withMessage('Debes ingresar una descripcion valida de 20 caractéres como mínimo'),
    check('category_id').notEmpty().withMessage("Debes Elegir al menos una categoria"),
    
    /* check('image1').custom((value, {req}) => { 
      let file = req.file;
      let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];

      if(!file) {
        throw new Error('Tienes que subir una imagen con las extensiones de archivo permitidas que son:');
      } else {
        let fileExtension = path.extname(file.originalname);
        if(!acceptedExtensions.includes(fileExtension)) {
          throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
        }
      }
      
      return true
    }),

    check('image2').custom((value, {req}) => { 
      let file = req.file;
      let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];

      if(!file) {
        throw new Error('Tienes que subir una imagen con las extensiones de archivo permitidas que son:');
      } else {
        let fileExtension = path.extname(file.originalname);
        if(!acceptedExtensions.includes(fileExtension)) {
          throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
        }
      }
      
      return true
    }),
    check('image3').custom((value, {req}) => { 
      let file = req.file;
      let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];

      if(!file) {
        throw new Error('Tienes que subir una imagen con las extensiones de archivo permitidas que son:');
      } else {
        let fileExtension = path.extname(file.originalname);
        if(!acceptedExtensions.includes(fileExtension)) {
          throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
        }
      }
      
      return true
    }),
    check('image4').custom((value, {req}) => { 
      let file = req.file;
      let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];

      if(!file) {
        throw new Error('Tienes que subir una imagen con las extensiones de archivo permitidas que son:');
      } else {
        let fileExtension = path.extname(file.originalname);
        if(!acceptedExtensions.includes(fileExtension)) {
          throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
        }
      }
      
      return true
    }) */
    
  
  ];

  module.exports = validateCrearProducto; 