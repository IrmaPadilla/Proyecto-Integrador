document.getElementById("btnSend").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let telefono = document.getElementById("telefono");
    let nombreUsuario = document.getElementById("nombreUsuario");
    let contraseña = document.getElementById("contraseña");
    let correo = document.getElementById("correo");
    console.log(username.value);
    console.log(password.value);
    const data = { 
        nombreUsuario: nombreUsuario.value, 
        contraseña: contraseña.value,
        nombre: nombre.value,
        apellido: apellido.value,
        telefono: telefono.value,
        correo: correo.value
    };

fetch("http://localhost:8080/api/register/", { // Falta cambiar esta URL a la verdadera q estemos usando
method: 'POST', // o 'PUT'
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(data),
})
.then(response => response.text())
.then(data => {
console.log('Mensaje:', data);
})
.catch((error) => {
console.error('Mensaje:', error);
});
});