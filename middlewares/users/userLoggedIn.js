function userLoggenIn(req, res, next) {
	if (req.session.userLogged) {
		return res.redirect('/usuario/perfil');
	}
	next();
}

module.exports = userLoggenIn;