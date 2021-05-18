const path = require('path');
const {validationResult} = require('express-validator');
const {Cart, Product, Item, Usuario} = require('../database/models');

module.exports = {
    addCart: (req,res) =>{
        const errores = validationResult(req);
        if(errores.isEmpty()){
            console.log("Buscando id de producto:" + req.params.productId)
         Product.findByPk(req.params.productId,{
                include: ['categoria']
            })
            .then((productos) =>{
                console.log(productos)
                let price = productos >0 ?
                Number(productos.price) * ((100 - productos.discount)/100) : Number(productos.price)

              console.log("Usuario logueado: " + req.session.userLogged)
                return Item.create({
                    salePrice : price,
                    quantity : req.body.cantidad,
                    subtotal : req.body.cantidad * price,
                    state: 1,
                    userId: req.session.userLogged.id,
                    productId: productos.id,
                    cartId: null
                     
                }) 
                .then(item  => res.redirect('products/productCart'))
                .catch(error => console.log(error)) 
            })
        }else{
            Productos.findByPk(req.body.productId,{
                include: ['categoria']
            })
            .then(producto =>{
                res.render(path.resolve(__dirname, '..','views','productos','detail'), {producto  , errores: errores.mapped()});
            })
        }
    },
    cart : (req,res) =>{
        Item.findAll({
            where : {
                state: 1,
                userId : req.session.userLogged.id
            },
            include: {
                all: true,
                nested: true
            }
        })        
        .then((items)=>{
            let total = items.reduce((total,item)=> (total = total + Number(item.subtotal)),0)
   
            

            console.log(items[0].product.name);
            res.render('products/productCart', {productos :items , total  } );
        })

    },
    deleteCart: (req,res) =>{
        Item.destroy({
            where: {
                productId : req.body.itemId,
                userId : req.session.userLogged.id
            }
        })
        .then(()=> res.redirect('/carrito'))
        .catch(error => console.log(error))
    },
    shop : (req,res)=>{
        let totalPrecio = 0;
        Item.findAll({
            where:{
                userId: req.session.userLogged.id,
                state: 1
            }
        })
        .then((items)=>{
            totalPrecio = items.reduce((total,item)=> (total = total + Number(item.subtotal)),0)
        })
        Cart.findOne({
            order: [['createdAt','DESC']]
        })
        .then((cart)=>{
            return Cart.create({
                orderNumber: cart ? cart.orderNumber + 1 : 1,
                total: totalPrecio,
                userId: req.session.userLogged.id
            })
        })
        .then(cart =>{
            Item.update({
                state: 0,
                cartId: cart.id
            },{
                where: {
                    userId: req.session.userLogged.id,
                    state: 1
                }
            }
            )
        })
        .then(()=> res.redirect('/carrito/historialCompra'))
        .catch(error => console.log(error))
    },
    history : (req,res) =>{
        Cart.findAll({
            where: {
                userId : req.session.userLogged.id
            },
            include: {
                all: true,
                nested: true
            }
        })
        .then(carts =>{
            res.render(path.resolve(__dirname, '..','views','carrito','historialCompra'), {carts } );           
        })
    },
    buyDetail : (req,res) =>{
        Cart.findByPk(req.params.id, {
            include : {
                all: true,
                nested: true
            }
        })
        .then((cart) =>{
            res.render(path.resolve(__dirname, '..','views','carrito','detalleCompra'), {cart } );
        })
    }


}