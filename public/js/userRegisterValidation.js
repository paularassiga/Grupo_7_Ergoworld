let expresion = 
/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/

window.addEventListener('load',function(){
    
    let formulario = document.querySelector('form.contenedor-formulario-1');

    formulario.addEventListener('submit', function(e){
        
       let errores = [];
       

       let nombreUsuario = document.querySelector('input.text-input-register-name')
       if(nombreUsuario.value.length == 0){
           errores.push('El campo nombre tiene que estar completo')
       }else if(nombreUsuario.value.length < 2){
        errores.push('El nombre debe tener 2 caractéres como mínimo')
       }

       let apellidoUsuario = document.querySelector('input.text-input-register-last-name')
       if(apellidoUsuario.value.length == 0){
        errores.push('El campo apellido tiene que estar completo');
         }else if(apellidoUsuario.value.length < 2){
        errores.push('El apellido debe tener 2 caractéres como mínimo')
        }

       let emailUsuario = document.querySelector('input.text-input-register-email')
       if(emailUsuario.value.length == 0){
           errores.push('El campo email tiene que estar completo');
       }else if(expresion.test(emailUsuario.value) == false){
        errores.push('Ingrese un formato de email válido')
       }

       let password = document.querySelector('input.text-input-register-password')
       console.log(password)
       if(password.value.length == 0){
           errores.push('El campo contraseña tiene que estar completo');
       }else if(password.value.length < 8){
        errores.push('La contraseña debe tener 8 caractéres como mínimo')
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

    function validarImagen(obj){
        var uploadFile = obj.files[0];
    
        if (!window.FileReader) {
            alert('El navegador no soporta la lectura de archivos');
            return;
        }
    
        if (!(/\.(jpg|png|gif)$/i).test(uploadFile.name)) {
            alert('El archivo a adjuntar no es una imagen');
        }
        else {
            var img = new Image();
            img.onload = function () {   
                
                    alert('Imagen correcta :)')                
                
            };
            img.src = URL.createObjectURL(uploadFile);
        }                 
    }
})