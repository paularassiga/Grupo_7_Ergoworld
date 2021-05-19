const express = require('express');
const path = require('path');
const methodOverride =  require('method-override'); // poder usar los métodos PUT y DELETE
const cookieParser = require('cookie-parser')
const session = require('express-session')
const authMiddleware = require("./middlewares/users/authMidleware")

//Aquí llamo a la ruta de las api de users
const apiUsersRouter = require('./routers/api/users')
//Aquí llamo a la ruta de las api de products
const apiProductsRouter = require('./routers/api/products')

const app = express();

//Definiendo la carpeta public

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false })); //URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(cookieParser())
app.use(session({
    secret: 'node secret key',
    maxAge: 365 * 24 * 60 * 60 * 1000
  }))
//Requiero el módulo que contiene las rutas (mainRoutes)
let mainRoutes = require("./routers/mainRoutes.js");
let productoRoutes = require("./routers/productoRoutes.js");
let userRoutes = require("./routers/usuarioRoutes.js");
let carritoRoutes = require("./routers/carritoRoutes.js");

//Definiendo las vistas
app.use(authMiddleware);
app.use('/', mainRoutes);
app.use('/productos', productoRoutes);
app.use('/usuario', userRoutes);
// app.use('/productCart', mainRoutes);
// app.use('/productDetail', mainRoutes);
app.use('/carrito',carritoRoutes);

//APIs
app.use('/api/users',apiUsersRouter);
app.use('/api/products',apiProductsRouter);

app.use(function(req,res){
  res.status(404).render('user/404');
});


//Para deployar
app.set('puerto', process.env.PORT || 3001);

// Llamando al servidor

app.listen (app.get('puerto'), ()=> console.log(`Servidor corriendo de manera satisfactoria  ${app.get('puerto')}` ));



