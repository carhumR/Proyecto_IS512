function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // Aquí puedes realizar la validación de los datos (por ejemplo, comparar con valores predefinidos)
    if (email === "usuario@hn.com" && password === "1234") {
        alert("Bienvenido");
      window.location.href = "nueva_pagina.html"; // Cambia "nueva_pagina.html" por la URL de la página a la que quieres redirigir
    } else {
        alert("Datos de inicio de sesión incorrectos. Por favor, inténtalo nuevamente.");
    }
}