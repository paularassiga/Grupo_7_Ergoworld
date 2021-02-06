const express = require('express');
const path = require('path');

const app = express();

//Definiendo la carpeta public

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

//Requiero el módulo que contiene las rutas (mainRoutes)

let mainRoutes = require("./routers/mainRoutes.js");
let productoRoutes = require("./routers/productoRoutes.js");

//Definiendo las vistas

app.use('/', mainRoutes);
app.use('/producto', productoRoutes);

// Llamando al servidor

app.listen(3000, () => {
    console.log('server ready puerto 3000')
})

