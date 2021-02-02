
/* Acá van todos los controladores/funciones que NO estén relacionados a los productos de Ergoworld, por ahora, sólo HOME*/

const path = require('path'); /*Para usar path.join*/

/*Funciones*/

let mainControllers = {
    index: (req,res) => {
        res.sendFile(path.join(__dirname, '../views/index.html'))
    }
}

/*Exporto*/
module.exports = mainControllers;