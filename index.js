const express = require('express');
const path = require('path');

const app = express();

//Definiendo la carpeta public

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

//Definiendo las vistas

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

// Llamando al servidor

app.listen(3000, () => {
    console.log('server ready puerto 3000')
})