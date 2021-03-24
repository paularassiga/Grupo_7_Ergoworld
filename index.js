const express = require('express');
const path = require('path');
const methodOverride =  require('method-override'); // poder usar los métodos PUT y DELETE
const cookieParser = require('cookie-parser')
const session = require('express-session')
const authMiddleware = require("./middlewares/users/authMidleware")

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
  }))
//Requiero el módulo que contiene las rutas (mainRoutes)
let mainRoutes = require("./routers/mainRoutes.js");
let productoRoutes = require("./routers/productoRoutes.js");
let userRoutes = require("./routers/usuarioRoutes.js");

//Definiendo las vistas
// app.use(authMiddleware);
app.use('/', mainRoutes);
app.use('/productos', productoRoutes);
app.use('/usuario', userRoutes);
// app.use('/productCart', mainRoutes);
// app.use('/productDetail', mainRoutes);


//Para deployar
app.set('puerto', process.env.PORT || 3000);

// Llamando al servidor

app.listen (app.get('puerto'), ()=> console.log(`Servidor corriendo de manera satisfactoria  ${app.get('puerto')}` ));



