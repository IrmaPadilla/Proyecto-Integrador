const searchBar = document.querySelector('#searchBar');
const containerProducts = document.querySelector('#container__products');
const ordenarMenorMayor = document.querySelector('#menorAMayor');
const ordenarMayorMenor = document.querySelector('#mayorAMenor');
const marca1 = document.querySelector('#marca1');
const marca2 = document.querySelector('#marca2');

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

//FILTRAR POR MARCA
marca1.addEventListener('click', (e) => {
  const marcaTrupper = e.target.value.toLowerCase();
  const filterByBrand = listProducts.filter(product =>{
    return (
      product.marca.toLowerCase().includes(marcaTrupper)
    );
  })
  console.log(filterByBrand);
  mostrarProductos(filterByBrand)
});

//FILTRAR POR MARCA2
marca2.addEventListener('click', (e) => {
  const marcaPretul = e.target.value.toLowerCase();
  const filterByBrand = listProducts.filter(product =>{
    return (
      product.marca.toLowerCase().includes(marcaPretul)
    );
  })
  console.log(filterByBrand);
  mostrarProductos(filterByBrand)
});

//Filtrar de menor a mayor
ordenarMenorMayor.addEventListener('click', (e) => {
  const mayorAMenor = e.target;
  if (mayorAMenor != null) {
    let filteredPrice = listProducts.sort((a, b) => {
      return a.precio > b.precio
        ? 1
        : a.precio === b.precio
        ? a.precio > b.precio
          ? 1
          : -1
        : -1;
    });
    mostrarProductos(filteredPrice);
  }
});

//Filtrar de mayor a menor
ordenarMayorMenor.addEventListener('click', (e) => {
  const mayorAMenor = e.target;
  if (mayorAMenor != null) {
    let filteredPrice = listProducts.sort((a, b) => {
      return a.precio < b.precio
        ? 1
        : a.precio === b.precio
        ? a.precio < b.precio
          ? 1
          : -1
        : -1;
    });
    mostrarProductos(filteredPrice);
  }
});

//Consumiendo JSON
export const obtenerProductos = async () => {
  try {
    // const res = await fetch('./js/lista_productos/db.json');
    const res = await fetch('http://localhost:8080/api/productos/');
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
    const productosHTML = document.createElement('div');
    productosHTML.classList.add(
      'col-xl-3',
      'col-md-6',
      'col-sm-6',
      'mb-5',
      'col-6'
    );
    productosHTML.innerHTML += `
    <div class="card h-100">
    <img class="card-mg-top img_size"  src=${product.imagen} />
    <div class="card-body">
    <h2 class="fw-semibold">${product.marca}</h2>
    <h2 class="card-title card_nombre">${product.nombre}</h2>
    <div>
      <p></p>
      </div>
      <p class="card-title fs-2 fw-bold precio">$${product.precio}</p>
      <button href="#" class="btn btn-primary w-100 mb-0 button__cart fs-4 ">
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
