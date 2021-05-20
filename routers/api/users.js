const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersAPIcontroller');

//Rutas
//Listado de todos los usuarios
router.get('/', usersAPIController.list);
//Detalle del usuario
router.get('/:id', usersAPIController.detail);
//Detalle del ultimo usuario
//router.get('/last', usersAPIController.last);

module.exports = router;