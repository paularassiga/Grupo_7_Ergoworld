const db = require('../../database/models');

const productsAPIController = {
    'list': (req, res) => {
        db.Product.findAll({
                include: ['categoria']
            })
            .then(products => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: 'api/products'
                    },
                    count: products.length,
                    countByCategory: "FALTA TERMINAR ESTO",
                    products: products //Acá faltan poner las relaciones con la categoria y la URL para ver el detalle del producto.
                }
                res.json(respuesta);
            })

    },

    'detail': (req, res) => {
        db.Product.findByPk(req.params.id, {
                include: ['categoria']
            })
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: '/api/products/:id'
                    },
                    product: product //Acá faltan poner las relaciones con las otras tablas y la URL para ver la imagen del producto.
                }
                res.json(respuesta);
            });
    }

}

module.exports = productsAPIController;