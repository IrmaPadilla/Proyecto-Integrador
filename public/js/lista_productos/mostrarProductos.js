
const searchBar = document.querySelector('#searchBar');
const containerProducts = document.querySelector('#container__products');

let listProducts = [];

//SearchBar
searchBar.addEventListener('input', (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredProducts = listProducts.filter((product) => {
    return (
      product.nombre.toLowerCase().includes(searchString) ||
      product.marca.toLowerCase().includes(searchString)
      );
  });
  mostrarProductos(filteredProducts);
});

//Consumiendo JSON
export const obtenerProductos = async () => {
  try {
    const res = await fetch('./js/lista_productos/db.json');
    listProducts = await res.json();
    mostrarProductos(listProducts);
  } catch (e) {
    console.log(e);
  }
};

// MOSTRAR PRODUCTOS EN HTML
const mostrarProductos = (listProducts) => {
  limpiarHTML();
  listProducts.forEach((product) => {
    console.log(listProducts);
    const productosHTML = document.createElement('div');
    productosHTML.classList.add('col-md-3', 'col-sm-6', 'mb-5', 'col-6');
    productosHTML.innerHTML += `
    <div class="card h-100">
    <img class="card-mg-top" src=${product.imagen} />
    <div class="card-body">
    <h2 class="fw-semibold">${product.marca}</h2>
    <h2 class="card-title">${product.nombre}</h2>
    <div>
      <p></p>
      </div>
      <p class="card-title fs-2 fw-bold precio">$${product.precio}</p>
      <button href="#" class="btn btn-primary w-100 button__cart fs-3 agregar__carrito">
      Agregar al Carrito
      </button>
      </div>
      </div>
      `;
    containerProducts.appendChild(productosHTML);
  });
};

obtenerProductos();

function limpiarHTML() {
  while (containerProducts.firstChild) {
    containerProducts.removeChild(containerProducts.firstChild);
  }
}