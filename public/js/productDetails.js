window.addEventListener('load', function () {
    let botonMas = document.querySelector('.masButton');
    let botonMenos = document.querySelector('.menosBotton');
    let cantidad = document.querySelector('.cantidad');

    botonMas.addEventListener('click', function (e) {
        cantidad.innerHTML = parseInt(cantidad.innerHTML) + 1
    })

    botonMenos.addEventListener('click', function (e) {
        if (parseInt(cantidad.innerHTML) > 1) {
            cantidad.innerHTML = parseInt(cantidad.innerHTML) - 1
        }
    })
})