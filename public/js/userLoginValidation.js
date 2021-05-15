let expresion = 
/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
console.log()

window.addEventListener('load',function(){
    let formulario = document.querySelector('form.contenedor-formulario-1');


    formulario.addEventListener('submit', function(e){
       let errores = [];

       let emailUsuario = document.querySelector('input.text-input-login-email')
       if(emailUsuario.value.length == 0){
           errores.push('El campo nombre tiene que estar completo');
       }else if(expresion.test(emailUsuario.value) == false){
        errores.push('Ingrese un formato de email válido')
       }

       let password = document.querySelector('input.text-input-login-pass')
       if(password.value.length == 0){
           errores.push('El campo contraseña tiene que estar completo');
       }

       if(errores.length>0){
           e.preventDefault();
           let ulErrores = document.querySelector('.errores');
           ulErrores.innerHTML = '';
           for (let i=0; i<errores.length; i++){
               ulErrores.innerHTML += '<li class="error">' + errores[i] + '</li>'
           }
       }





    })
})