copyrightDate();
function copyrightDate() {
  const year = new Date();
  const copyright = document.querySelector("#copyright");
  copyright.innerHTML = `
    ${year.getFullYear()} Copyright:
  `;
}