const URL_MAIN = "http://localhost:8080/api/newsletter";

copyrightDate();
function copyrightDate() {
  const year = new Date();
  const copyright = document.querySelector("#copyright");
  copyright.innerHTML = `
    ${year.getFullYear()} Copyright:
  `;
}

document.getElementById("subscribe").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clic done")
  // let data = new FormData(form);
  // console.log(data);
  // console.log(data.get('email'));
  let email = document.getElementById("email");
  console.log(email.value);
  const data = {
    correo: email.value,
  };

  fetch(URL_MAIN, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), //Aqui estoy llamando a mi cuerpo de la solicitud.
  })
    .then((response) => response.text())
    .then((data) => {
      console.log("Correo Guardado:", data); //Mensaje para cuando se agreguen los datos correctamente
    })
    .catch((error) => {
      console.error("Error:", error);
    });

})
