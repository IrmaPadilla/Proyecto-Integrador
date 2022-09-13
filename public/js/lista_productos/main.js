//Imports
import { obtenerProductos } from './mostrarProductos.js';
import { copyrightDate } from './copyright.js';

//Variables
const botonCarrito = document.querySelector('#botonCarrito');
const listaProductos = document.querySelector('#lista__productos');
const formulario = document.querySelector('#formulario');
const searchBar = document.querySelector('#searchBar');

//Eventos

//Agregar al carrito presionando el boton
listaProductos.addEventListener('click', agregarAlCarrito);

//Funciones
function agregarAlCarrito(e) {
	e.preventDefault();
	if (e.target.classList.contains('agregar__carrito')) {
		const productoSeleccionado = e.target.parentElement.parentElement;
		leerContenidoProducto(productoSeleccionado);
	}
}

//Lee el contenido y extrae la información del producto.
function leerContenidoProducto(producto) {
	//Crear un objeto con el contenido del card del producto seleccionado.
	const infoProducto = {
		imagen: producto.querySelector('img').src,
		titulo: producto.querySelector('h2').textContent,
		precio: producto.querySelector('.precio').textContent,
		cantidad: 1,
	};
	console.table(infoProducto);
}

//Mostrando productos con JS
obtenerProductos();

copyrightDate();
