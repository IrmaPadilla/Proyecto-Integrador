document.getElementById("btnSend").addEventListener("click", function(e){
    let nombreUsuario = document.getElementById("nombreUsuario");
    let contraseña = document.getElementById("contraseña");
    console.log(username.value);
    console.log(password.value);
    const data = {nombreUsuario:nombreUsuario.value, 
                        contraseña: contraseña.value
    };

fetch("http://localhost:8080/api/login/", {  // Falta cambiar esta URL a la verdadera q estemos usando
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