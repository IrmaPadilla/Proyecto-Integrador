//Imports
import { products } from "./db.js";

//Funciones
export function llenarMarca() {
  const marcaOpcion = document.querySelector("#marca");

  products.forEach((item) => {
    const { marca } = item;
    const opcion = document.createElement("option");
    opcion.value = marca;
    opcion.textContent = `${marca}`;
    marcaOpcion.appendChild(opcion);
  });
}

export function llenarPrecio() {
  const precioOpcion = document.querySelector("#precio");

  products.forEach((item) => {
    const { precio } = item;
    const opcion = document.createElement("option");
    opcion.value = precio;
    opcion.textContent = `$ ${precio}`;
    precioOpcion.appendChild(opcion);
  });
}

// export function ordenarProductos(){

// }
