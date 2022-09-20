const URL_MAIN = "http://localhost:8080/api/newsletter";

let form = document.getElementById('newsForm');

form.addEventListener('submit', function(e){
  e.preventDefault();
  console.log("clic done")
});

copyrightDate();
function copyrightDate() {
  const year = new Date();
  const copyright = document.querySelector("#copyright");
  copyright.innerHTML = `
    ${year.getFullYear()} Copyright:
  `;
}

fetch(URL_MAIN, { //URL del servicio a donde se hara el POST
  method: 'POST', // or 'PUT' 
  headers: { // se agrega el header
    'Content-Type': 'application/json', //tipo de contenido
  },
  body: JSON.stringify(data), //se agrega el cuerpo del POST
})
.then(response => response.json()) //se obtiene la respuesta del servidor
.then(data => { //se obtiene el json
  console.log('Success:', data); //se imprime el json
})
.catch((error) => { //si hay un error
  console.error('Error:', error); //se imprime el error
});