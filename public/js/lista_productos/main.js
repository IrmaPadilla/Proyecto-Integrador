//Imports
import { llenarMarca, llenarPrecio } from "./filters.js";
import { mostrarProductos } from "./mostrar_productos.js";
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


//Copyright
copyrightDate();

