document.getElementById("btnSend").addEventListener("click", function(e){
    let nombreUsuario = document.getElementById("nombreUsuario");
    let contraseña = document.getElementById("contraseña");
    const data = {
        nombreUsuario:nombreUsuario.value, 
        contraseña: contraseña.value
    };

fetch("http://localhost:8080/api/clientes/", {
method: 'POST',
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