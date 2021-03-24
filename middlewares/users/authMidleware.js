const authMiddleware = function (req, res, next) {
    console.log(req.url);
    if (req.cookies.usuario != undefined || req.session.usuario != undefined || req.url == "/usuario/login") {
        next()
    } else {
        res.redirect("/usuario/login")

    }
}


module.exports = authMiddleware