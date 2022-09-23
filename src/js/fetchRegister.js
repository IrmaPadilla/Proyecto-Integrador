document.getElementById("btnSend").addEventListener("click", function(e){
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let telefono = document.getElementById("telefono");
    let nombreUsuario = document.getElementById("nombreUsuario");
    let contraseña = document.getElementById("contraseña");
    let correo = document.getElementById("correo");
    let newsletter = document.getElementById("newsletter").checked;
    // console.log(nombreUsuario.value);
    // console.log(contraseña.value);
    // console.log(newsletter)
    const data = { 
        nombre: nombre.value,
        apellido: apellido.value, 
        contraseña: contraseña.value,
        correo: correo.value,
        telefono: telefono.value,
        nombreUsuario: nombreUsuario.value,
        newsletter: newsletter
    };
    
fetch("http://localhost:8080/api/clientes/", { // Falta cambiar esta URL a la verdadera q estemos usando
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