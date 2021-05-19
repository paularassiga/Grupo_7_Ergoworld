window.addEventListener('load', function () {
    let botonMas = document.querySelector('.masButton');
    let botonMenos = document.querySelector('.menosBotton');
    let cantidad = document.querySelector('.cantidad');

    botonMas.addEventListener('click', function (e) {
        e.preventDefault();

        cantidad.value = parseInt(cantidad.value) + 1
    })

    botonMenos.addEventListener('click', function (e) {

        e.preventDefault();
        if (parseInt(cantidad.value) > 1) {
            cantidad.value = parseInt(cantidad.value) - 1
        }
    })
})