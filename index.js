const express = require('express');
const path = require('path');
const app = express();

//Definiendo la carpeta public

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//Requiero el módulo que contiene las rutas (mainRoutes)

let mainRoutes = require("./routers/mainRoutes.js");
let productoRoutes = require("./routers/productoRoutes.js");

//Definiendo las vistas

app.use('/', mainRoutes);
app.use('/producto', productoRoutes);
// app.use('/login', mainRoutes);
// app.use('/register', mainRoutes);
// app.use('/productCart', mainRoutes);
// app.use('/productDetail', mainRoutes);


//Para deployar
app.set('puerto', process.env.PORT || 3000);

// Llamando al servidor

app.listen (app.get('puerto'), ()=> console.log(`Servidor corriendo de manera satisfactoria  ${app.get('puerto')}` ));



