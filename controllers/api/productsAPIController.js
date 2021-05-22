const db = require('../../database/models');

const productsAPIController = {

    'ultimoProductoCreado':(req, res)=>{
        const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;  
        db.Product.findAll({
            limit: 1,
            order: [ [ 'id','DESC' ]],
        
            })
            .then(products => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: 'api/ultimoProductoCreado'
                    },
                    count: 1,
                    countByCategory: "FALTA TERMINAR ESTO",
                    products: products.map(product => {
                        return{
                            id: product.id,
                            name: product.name,
                            description: product.shortDescription,
                            image: '/images/products/'+  product.image_1,
                            //Falta el array con principal relación de uno a muchos con categorias
                            detail: `${fullUrl}/${product.id}`
                        }
                    }) //Acá faltan poner las relaciones con la categoria y la URL para ver el detalle del producto.
                }
                res.json(respuesta);
            })
    },





    'list': (req, res) => {
        const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;  
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
                    products: products.map(product => {
                        return{
                            id: product.id,
                            name: product.name,
                            description: product.shortDescription,
                            //Falta el array con principal relación de uno a muchos con categorias
                            detail: `${fullUrl}/${product.id}`
                        }
                    }) //Acá faltan poner las relaciones con la categoria y la URL para ver el detalle del producto.
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