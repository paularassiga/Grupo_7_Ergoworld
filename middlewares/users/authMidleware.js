const User = require('../../data/userModel');

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie = req.cookies.userEmail;
	let userFromCookie = User.findByField('email', emailInCookie);

	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

	next();
};

module.exports = userLoggedMiddleware;


/* const authMiddleware = function (req, res, next) {
    console.log(req.url);
    if (req.cookies.usuario != undefined ||
        req.session.usuario != undefined ||
        req.url == "/usuario/login" ||
        req.url == "/usuario/register") {
        next()
    } else {
        console.log("No esta logueado")
        console.log("Usuario en cookies " + req.cookies.usuario)
        console.log("Usuario en session " + req.session.usuario)

        res.redirect("/usuario/login")

    }
}


module.exports = authMiddleware */