// Definir el Middle para el admin :)

function carrito(req, res, next) {
	if (res.locals.isLogged) {
		return next();
	}
	return res.redirect('/usuario/denegado');
	
}

module.exports = carrito;