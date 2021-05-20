var express = require('express');
var router = express.Router();
const authMiddleware = require('../middlewares/users/authMidleware');
const carrito = require('../middlewares/users/carrito');

//Aqui incorporo el middleware que se encarga de validar que la cantidad de productos a incluir al carrito no sea cero
const validador = require('../middlewares/products/validadorCarrito');


const carritoController = require('../controllers/carritoController');

router.post('/adicionarAlCarrito/:productId', carrito,  authMiddleware, validador.addCart, carritoController.addCart);
router.get('/productCart', carrito, authMiddleware, carritoController.cart);
router.post('/borrarElementoCarrito', authMiddleware, carritoController.deleteCart);
router.post('/compra', authMiddleware, carritoController.shop);
router.get('/historialCompra', authMiddleware, carritoController.history);
router.get('/detalleCompra/:id', authMiddleware, carritoController.buyDetail);
router.get('/checkout/', authMiddleware, carritoController.checkout);

module.exports = router;

