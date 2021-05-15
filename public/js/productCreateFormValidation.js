window.addEventListener('load',function(){
    function ValidarImagen(obj){
        var uploadFile = obj.files[0];
        
        if (!window.FileReader) {
            alert('El navegador no soporta la lectura de archivos');
            return;
        }
    
        if (!(/\.(jpg|png|jpeg)$/i).test(uploadFile.name)) {
            alert('El archivo a adjuntar no es una imagen');
        }
        else {
            var img = new Image();
            img.onload = function () {
                if (this.width.toFixed(0) != 200 && this.height.toFixed(0) != 200) {
                    alert('Las medidas deben ser: 200 * 200');
                }
                else if (uploadFile.size > 20000)
                {
                    alert('El peso de la imagen no puede exceder los 200kb')
                }
                else {
                    alert('Imagen correcta :)')                
                }
            };
            img.src = URL.createObjectURL(uploadFile);
        }                 
    }
    let formulario = document.querySelector('form.create-form');


    formulario.addEventListener('submit', function(e){
       let errores = [];

       let campoNombre = document.querySelector('input.form-input-name')
       if(campoNombre.value.length == 0){
           errores.push('El campo nombre tiene que estar completo');
       }else if(campoNombre.value.length < 5) {
           errores.push('El campo nombre debe contener al menos 5 caracteres')
       }

       let campoResumen = document.querySelector('input.form-input-descr')
       if(campoResumen.value.length == 0){
           errores.push('El campo resumen tiene que estar completo');
       }

       let campoPrecio = document.querySelector('input.form-input-price')
       if(campoPrecio.value.length == 0){
           errores.push('El campo precio tiene que estar completo');
       }

       let campoStock = document.querySelector('input.form-input-stock')
       if(campoStock.value.length == 0){
           errores.push('El campo stock tiene que estar completo');
       }

       let campoC1 = document.querySelector('input.form-input-characteristic1')
       if(campoC1.value.length == 0){
           errores.push('El campo característica 1 tiene que estar completo');
       }

       let campoC2 = document.querySelector('input.form-input-characteristic2')
       if(campoC2.value.length == 0){
           errores.push('El campo característica 2 tiene que estar completo');
       }

       let campoC3 = document.querySelector('input.form-input-characteristic3')
       if(campoC3.value.length == 0){
           errores.push('El campo característica 3 tiene que estar completo');
       }

       let campoC4 = document.querySelector('input.form-input-characteristic4')
       if(campoC4.value.length == 0){
           errores.push('El campo característica 4 tiene que estar completo');
       }

       let titleDescription1 = document.querySelector('input.form-input-titleDescription1')
       if(titleDescription1.value.length == 0){
           errores.push('El campo titulo descripción 1 tiene que estar completo');
       }

       let description1 = document.querySelector('input.form-input-description1')
       if(description1.value.length == 0){
           errores.push('El campo descripción 1 tiene que estar completo');
       }else if(description1.value.length < 20) {
           errores.push('El campo descripción 1 debe contener al menos 20 caracteres')
       }

       let titleDescription2 = document.querySelector('input.form-input-titleDescription2')
       if(titleDescription2.value.length == 0){
           errores.push('El campo titulo descripción 2 tiene que estar completo');
       }

       let description2 = document.querySelector('input.form-input-description2')
       if(description2.value.length == 0){
           errores.push('El campo descripción 2 tiene que estar completo');
       }else if(description2.value.length < 20) {
           errores.push('El campo descripción 2 debe contener al menos 20 caracteres')
       }

       let titleDescription3 = document.querySelector('input.form-input-titleDescription3')
       if(titleDescription3.value.length == 0){
           errores.push('El campo titulo descripción 3 tiene que estar completo');
       }

       let description3 = document.querySelector('input.form-input-description3')
       if(description3.value.length == 0){
           errores.push('El campo descripción 3 tiene que estar completo');
       }else if(description3.value.length < 20) {
           errores.push('El campo descripción 3 debe contener al menos 20 caracteres')
       }



       if(errores.length>0){
           e.preventDefault();
           alert('Hay errores en los campos')
           let ulErrores = document.querySelector('.errores');
           ulErrores.innerHTML = '';
           for (let i=0; i<errores.length; i++){
               ulErrores.innerHTML += '<li class="error">' + errores[i] + '</li>'
           }
       }





    })

})