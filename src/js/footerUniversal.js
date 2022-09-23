// Funcion que actualiza el año en el footer
copyrightDate();
function copyrightDate() {
  const year = new Date();
  const copyright = document.querySelector("#copyright");
  copyright.innerHTML = `
    ${year.getFullYear()} Copyright:
  `;
}

// Funcion que guarda correos ingresados en formulario de newsletter
document.getElementById("subscribe").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clic done")
  let email = document.getElementById("email");
  console.log(email.value);
  const data = {
    correo: email.value
  };

  fetch("http://localhost:8080/api/newsletter/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // cuerpo de la solicitud.
  })
    .then((response) => response.text())
    .then((data) => {
      console.log("Correo Guardado:", data); 
    })
    .catch((error) => {
      console.error("Error:", error);
    });

})
