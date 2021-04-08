// Definir el Middle para el usuario no logeado, basicamente no podra entrar a la vista de perfil

function userLoggenIn(req, res, next) {
	if (!req.session.userLogged) {
		return res.redirect('/usuario/denegado');
	}
	next();
}

module.exports = userLoggenIn;