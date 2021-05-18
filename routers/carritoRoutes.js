var express = require('express');
var router = express.Router();
const authMiddleware = require('../middlewares/users/authMidleware');

//Aqui incorporo el middleware que se encarga de validar que la cantidad de productos a incluir al carrito no sea cero
const validador = require('../middlewares/products/validadorCarrito');


const carritoController = require('../controllers/carritoController');

router.post('/adicionarAlCarrito/:productId', authMiddleware, validador.addCart, carritoController.addCart);
// router.get('/', authMiddleware, carritoController.cart);
router.post('/borrarElementoCarrito', authMiddleware, carritoController.deleteCart);
router.post('/compra', authMiddleware, carritoController.shop);
router.get('/historialCompra', authMiddleware, carritoController.history);
router.get('/detalleCompra/:id', authMiddleware, carritoController.buyDetail);

module.exports = router;

