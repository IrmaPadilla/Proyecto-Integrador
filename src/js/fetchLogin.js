document.getElementById("btnSend").addEventListener("click", function(e){
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    console.log(username.value);
    console.log(password.value);
    const data = { username: username.value, 
                        password: password.value
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