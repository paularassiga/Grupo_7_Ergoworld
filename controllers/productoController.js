

const path = require('path'); /*Para usar path.join*/

/*Funciones*/

let productoControllers = {
    detalle: (req,res) => {
        res.sendFile(path.join(__dirname, '../views/paginaProducto.html'))
    }
}

/*Exporto*/
module.exports = productoControllers;