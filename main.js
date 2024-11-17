// Usuario y contraseña predeterminados
const validUsername = "admin";
const validPassword = "1234";

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorElement = document.getElementById("error");

    // Validación
    if (username === validUsername && password === validPassword) {
        alert("¡Inicio de sesión exitoso!");
        errorElement.textContent = ""; // Limpiar mensaje de error
        window.location.href = "home.html";
    } else {
        errorElement.textContent = "Usuario o contraseña incorrectos.";
    }

}
