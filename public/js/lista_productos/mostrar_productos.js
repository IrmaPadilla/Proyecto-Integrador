import { products } from "./db.js";

export function mostrarProductos() {
    // Leer el elemento donde ira el HTML
    const contenedorProductos = document.querySelector("#container__products");
    // Construir el html de los productos
    products.forEach((productos) => {
      const { marca, nombre, precio, rating, imagen } = productos;
      const productosHTML = document.createElement("div");
      productosHTML.classList.add("col-md-3", "col-sm-6", "mb-5", "col-6");
      productosHTML.innerHTML += `
      <div class="card h-100">
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