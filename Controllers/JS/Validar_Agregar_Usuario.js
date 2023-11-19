function ValidacionAgregarUsuario() {
    var nombre = document.getElementsByClassName("Nombre")[0].value;
    var correo = document.getElementsByClassName("Email")[0].value;
    var contraseña = document.getElementsByClassName("Contraseña")[0].value;
    var identificacion = document.getElementsByClassName("Identificacion")[0].value;
    var imagen = document.getElementsByClassName("Imagen")[0].value;

    var correoExpresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var nombreExpresion = /^[a-zA-Z0-9\s]+$/;

    if (nombre === "" || contraseña === "" || imagen === "") {
        alert("Algun campo está vacío");
        return false;
    }

    if (!nombre.match(nombreExpresion)) {
        alert("El nombre contiene caracteres no permitidos.");
        return false;
    }

    if (correo.length <= 5 || !correoExpresion.test(correo)) {
        alert("Correo electrónico no válido o menor a 5 caracteres");
        return false;
    }

    if (contraseña.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres");
        return false;
    }

    if (isNaN(identificacion) || identificacion.length <= 5) {
        alert("La identificación debe ser un número y tener más de 5 dígitos");
        return false;
    }

    return true; // Si todas las validaciones pasan, permite el envío del formulario
}
