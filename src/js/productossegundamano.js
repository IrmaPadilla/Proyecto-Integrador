const tarjeta = document.querySelector('#tarjeta');
const cards = document.querySelector('#cards');
const productos = document.querySelector('#productos');
const recienllegados = document.querySelector('#recienllegados');

let segundamano = [];
let segundamano2 = [];

// SearchBar
const SearchBar = document.querySelector('#buscador');

SearchBar.addEventListener('input', (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredProducts = segundamano.filter((product) => {
    return (
      product.nombre.toLowerCase().includes(searchString) ||
      product.descrpcion.toLowerCase().includes(searchString)
    );
  });
  mostrarproductos(filteredProducts);
});
SearchBar.addEventListener('input', (e) => {
  const searchString2 = e.target.value.toLowerCase();
  const filteredProducts2 = segundamano2.filter((item) => {
    return (
      item.nombre.toLowerCase().includes(searchString2) ||
      item.descrpcion.toLowerCase().includes(searchString2)
    );
  });
  mostrarproductos2(filteredProducts2);
});

const Productoss = async () => {
  try {
    const res = await fetch('../src/js/segundamano.json');
    segundamano = await res.json();
    mostrarproductos(segundamano);
  } catch (e) {
    console.log(e);
  }
};
const Productoss2 = async () => {
  try {
    const res = await fetch('../src/js/segundamano2.json');
    segundamano2 = await res.json();
    mostrarproductos2(segundamano2);
  } catch (e) {
    console.log(e);
  }
};

const mostrarproductos = (segundamano) => {
  limpiarHTML();
  segundamano.forEach((card) => {
    const elementos = document.createElement('div');
    elementos.classList.add('content', 'col', 'card');

    elementos.innerHTML += `
     <img  class="imgall" src=${card.imagen}>
     <h3>${card.nombre}</h3>
     <p class="descripcion">${card.descrpcion}</p>
     <h6>${card.precio}</h6>
     <a href="#" class="btn btn-light float-right cardbutton">Añadir al carro>></a>
    </div>`;
    productos.appendChild(elementos);
  });
};

const mostrarproductos2 = (segundamano2) => {
  limpiarHTML2();
  segundamano2.forEach((card) => {
    const elementos = document.createElement('div');
    elementos.classList.add('content', 'col', 'card');
    elementos.innerHTML += `
         <div class="content col card">
         <img  class="imgall" src=${card.imagen}>
         <h3>${card.nombre}</h3>
         <p class="descripcion">${card.descrpcion}</p>
         <h6>${card.precio}</h6>
         <a href="#" class="btn btn-light float-right cardbutton"">Añadir al carro>></a>
        </div>`;
    recienllegados.appendChild(elementos);
  });
};
Productoss();
Productoss2();

function limpiarHTML2() {
  while (recienllegados.firstChild) {
    recienllegados.removeChild(recienllegados.firstChild);
  }
}

function limpiarHTML() {
  while (productos.firstChild) {
    productos.removeChild(productos.firstChild);
  }
}
