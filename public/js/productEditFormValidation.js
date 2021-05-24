window.addEventListener('load',function(){

    let formulario = document.querySelector('.edit-form');

    formulario.addEventListener('submit', function(e){

       let errores = [];

       let campoNombre = document.querySelector('.form-input-name')
       console.log(campoNombre)
       if(campoNombre.value.length == 0){
           errores.push('El campo nombre tiene que estar completo');
       }else if(campoNombre.value.length < 5) {
           errores.push('El campo nombre debe contener al menos 5 caracteres')
       }

       let campoResumen = document.querySelector('.form-input-text')
       if(campoResumen.value.length == 0){
           errores.push('El campo resumen tiene que estar completo');
       }

       let campoPrecio = document.querySelector('.form-input-price')
       if(campoPrecio.value.length == 0){
           errores.push('El campo precio tiene que estar completo');
       }

       let campoStock = document.querySelector('.form-input-stock')
       if(campoStock.value.length == 0){
           errores.push('El campo stock tiene que estar completo');
       }

       let campoC1 = document.querySelector('.form-input-characteristic1')
       if(campoC1.value.length == 0){
           errores.push('El campo característica 1 tiene que estar completo');
       }

       let campoC2 = document.querySelector('.form-input-characteristic2')
       if(campoC2.value.length == 0){
           errores.push('El campo característica 2 tiene que estar completo');
       }

       let campoC3 = document.querySelector('.form-input-characteristic3')
       if(campoC3.value.length == 0){
           errores.push('El campo característica 3 tiene que estar completo');
       }

       let campoC4 = document.querySelector('.form-input-characteristic4')
       if(campoC4.value.length == 0){
           errores.push('El campo característica 4 tiene que estar completo');
       }

       let titleDescription1 = document.querySelector('.form-input-titleDescription1')
       if(titleDescription1.value.length == 0){
           errores.push('El campo titulo descripción 1 tiene que estar completo');
       }

       let description1 = document.querySelector('.form-input-description1')
       if(description1.value.length == 0){
           errores.push('El campo descripción 1 tiene que estar completo');
       }else if(description1.value.length < 20) {
           errores.push('El campo descripción 1 debe contener al menos 20 caracteres')
       }

       let titleDescription2 = document.querySelector('.form-input-titleDescription2')
       if(titleDescription2.value.length == 0){
           errores.push('El campo titulo descripción 2 tiene que estar completo');
       }

       let description2 = document.querySelector('.form-input-description2')
       if(description2.value.length == 0){
           errores.push('El campo descripción 2 tiene que estar completo');
       }else if(description2.value.length < 20) {
           errores.push('El campo descripción 2 debe contener al menos 20 caracteres')
       }

       let titleDescription3 = document.querySelector('.form-input-titleDescription3')
       if(titleDescription3.value.length == 0){
           errores.push('El campo titulo descripción 3 tiene que estar completo');
       }

       let description3 = document.querySelector('.form-input-description3')
       if(description3.value.length == 0){
           errores.push('El campo descripción 3 tiene que estar completo');
       }else if(description3.value.length < 20) {
           errores.push('El campo descripción 3 debe contener al menos 20 caracteres')
       }

       let imagen1 = document.querySelector('.form-input-imagen1')
       if(imagen1.value.length == 0){
            
        } else if (!(/\.(jpg|png|gif|jpeg)$/i).test(imagen1.value)) {
            errores.push('La imagen 1 tiene un formato invalido');
       }   

       let imagen2 = document.querySelector('.form-input-imagen2')
       if(imagen1.value.length == 0){
           ;
        } else if (!(/\.(jpg|png|gif|jpeg)$/i).test(imagen2.value)) {
            errores.push('La imagen 2 tiene un formato invalido');
       }   

       let imagen3 = document.querySelector('.form-input-imagen3')
       if(imagen1.value.length == 0){
           ;
        } else if (!(/\.(jpg|png|gif|jpeg)$/i).test(imagen3.value)) {
            errores.push('La imagen 3 tiene un formato invalido');
       }  

       let imagen4 = document.querySelector('.form-input-imagen4')
       if(imagen1.value.length == 0){
           ;
        } else if (!(/\.(jpg|png|gif|jpeg)$/i).test(imagen4.value)) {
            errores.push('La imagen 4 tiene un formato invalido');
       }  

       if(errores.length>0){
           e.preventDefault();
           alert('Hay errores en los campos');
           let ulErrores = document.querySelector('.errores');
           ulErrores.innerHTML = '';
           for (let i=0; i<errores.length; i++){
               ulErrores.innerHTML += '<li class="error">' + errores[i] + '</li>'
           }

           document.getElementById('top').scrollIntoView({
            behavior: 'smooth'
          });
       }

    })
    

})