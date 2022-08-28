//Variables
const botonCarrito = document.querySelector("#botonCarrito"),
  listaProductos = document.querySelector("#lista__productos");

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
