// Definir el Middle para el admin :)

function soyAdmin(req, res, next) {
	if (res.locals.isLogged && res.locals.userLogged.user != 3) {
		return next();
	}
	return res.redirect('/usuario/404');
	
}

module.exports = soyAdmin;