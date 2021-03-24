const authMiddleware = function (req, res, next) {
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


module.exports = authMiddleware