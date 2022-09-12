copyrightDate();
function copyrightDate() {
  const year = new Date();
  const copyright = document.querySelector("#copyright");
  copyright.innerHTML = `
    Copyright ${year.getFullYear()}
  `;
}