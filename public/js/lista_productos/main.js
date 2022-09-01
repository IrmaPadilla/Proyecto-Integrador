//Imports
import { products } from "./db.js";
import { llenarMarca, llenarPrecio } from "./filters.js";
import { copyrightDate } from "./copyright.js";

//Variables
const botonCarrito = document.querySelector("#botonCarrito");
const listaProductos = document.querySelector("#lista__productos");
const formulario = document.querySelector("#formulario");

//Eventos
cargarEventListeners();
function cargarEventListeners() {
  //Agregar al carrito presionando el boton
  listaProductos.addEventListener("click", agregarAlCarrito);
  window.addEventListener("submit", buscarLosProductos);
}

//Llenar option Marca
llenarMarca();

//Llenar option Precio
llenarPrecio();

function buscarLosProductos(e) {
  e.preventDefault();
  const buscarProductos = document.querySelector("#buscar__productos").value;
  console.log(buscarProductos);
}

//Funciones
function agregarAlCarrito(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar__carrito")) {
    const productoSeleccionado = e.target.parentElement.parentElement;
    leerContenidoProducto(productoSeleccionado);
  }
}

//Lee el contenido y extrae la información del producto.
function leerContenidoProducto(producto) {
  //Crear un objeto con el contenido del card del producto seleccionado.
  const infoProducto = {
    imagen: producto.querySelector("img").src,
    titulo: producto.querySelector("h2").textContent,
    precio: producto.querySelector(".precio").textContent,
    cantidad: 1,
  };
  console.table(infoProducto);
  // console.table(infoProducto);
}

//Mostrando productos con JS
mostrarProductos();
function mostrarProductos() {
  // Leer el elemento donde ira el HTML
  const contenedorProductos = document.querySelector("#container__products");
  // Construir el html de los productos
  products.forEach((productos) => {
    const { marca, nombre, precio, rating, imagen } = productos;
    const productosHTML = document.createElement("div");
    productosHTML.classList.add("col-md-3", "col-sm-6", "mb-5", "col-6");
    productosHTML.innerHTML += `
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

//Copyright
copyrightDate();

