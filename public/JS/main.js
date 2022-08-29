//Imports
import { products } from "./db.js";
// console.table(products);

//Variables
const botonCarrito = document.querySelector("#botonCarrito");
const listaProductos = document.querySelector("#lista__productos");

//Eventos
cargarEventListeners();
function cargarEventListeners() {
  //Agregar al carrito presionando el boton
  listaProductos.addEventListener("click", agregarAlCarrito);
}

//Funciones
function agregarAlCarrito(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar__carrito")) {
    const productoSeleccionado = e.target.parentElement.parentElement;
    leerContenidoProducto(productoSeleccionado);
  }
}

//Copyright
copyrightDate();
function copyrightDate() {
  const year = new Date();
  console.log(year.getFullYear());
  const copyright = document.querySelector("#copyright");
  const copyrightDateShow = document.createElement("p");
  copyrightDateShow.classList.add(
    "fs-2",
    "text-white",
    "fw-bold",
    "text-center"
  );
  copyrightDateShow.innerHTML = `
    Copyright ${year.getFullYear()}
  `;
  copyright.appendChild(copyrightDateShow);
}

//Lee el contenido y extrae la información del producto.
function leerContenidoProducto(producto) {
  console.log(producto);

  //Crear un objeto con el contenido del card del producto seleccionado.
  const infoProducto = {
    imagen: producto.querySelector("img").src,
    titulo: producto.querySelector("h2").textContent,
    precio: producto.querySelector(".precio").textContent,
    cantidad: 1,
  };
  console.log(infoProducto);
}

//Mostrando productos con JS
mostrarProductos();
function mostrarProductos() {
  // Leer el elemento donde ira el HTML
  const contenedorProductos = document.querySelector("#container__products");
  // Construir el html de los autos
  products.forEach((productos) => {
    const { marca, nombre, precio, rating, imagen } = productos;
    console.table(productos);
    const productosHTML = document.createElement("div");
    productosHTML.classList.add("col-md-3", "col-sm-6", "mb-5", "col-6");
    productosHTML.innerHTML = `
    <div class="card">
        <img class="card-mg-top" src=${imagen} />
        <div class="card-body">
          <h2 class="fw-semibold">${marca}</h2>
          <h2 class="card-title">${nombre}</h2>
        <div>
          <p></p>
        </div>
        <p class="card-title fs-2 fw-bold precio">$${precio}</p>
        <button href="#" class="btn btn-primary w-100 button__cart fs-3 agregar__carrito">
                                Agregar al Carrito
        </button>
        </div>
    </div>`;
    // productosHTML.classList.add("col-md-3 col-sm-6 mb-5 col-6");
    contenedorProductos.appendChild(productosHTML);
  });
}
