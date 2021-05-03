window.onload = function () {
    console.log("Login js corriendo correctamente")
    let loginForm = document.querySelector("#loginForm");
    let emailField = document.querySelector("#emailInput");
    let passwordField = document.querySelector("#password");

    console.log(loginForm)
    loginForm.addEventListener("submit", function (e) {
        console.log(passwordField.innerText)
        if (!emailField.innerText.length > 0 || !passwordField.innerText.length > 0) {
            console.log("Completa todo el formulario...")
            alert( passwordField.innerHTML);
            e.preventDefault();
        }
    })

}