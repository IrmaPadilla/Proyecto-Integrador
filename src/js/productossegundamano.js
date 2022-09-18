const recienllegados = document.querySelector('#recienllegados');
const tarjeta = document.querySelector('#tarjeta');
let segundamano = [];
let segundamano2 = [];
const Productoss = async () => {
    try{
        const res = await fetch('../src/js/segundamano.json');
        segundamano = await res.json();
        mostrarproductos(segundamano);
    } catch(e){
        console.log(e);
    }
}
const Productoss2 = async () => {
    try{
        const res = await fetch('../src/js/segundamano2.json');
        segundamano2 = await res.json();
        mostrarproductos(segundamano2);
    } catch(e){
        console.log(e);
    }
}

const mostrarproductos = (segundamano) =>{
segundamano.forEach( card => {
    const elementos = document.createElement('div');
    elementos.classList.add(
        'row', 
        'row-cols-1', 
        'row-cols-md-4', 
        'mx-2', 
        'px-2', 
        'g-2',
    ); 
     elementos.innerHTML +=` 
     <div class="content col card">
     <img  class="imgall" src=${card.imagen}>
     <h3>${card.nombre}</h3>
     <p>${card.descrpcion}</p>
     <h6>${card.precio}</h6>
     <a href="#" class="btn btn-light float-right cardbutton"">Añadir al carro>></a>
    </div>`
tarjeta.appendChild(elementos);
});
}

const mostrarproductos2 = (segundamano2) =>{
    segundamano2.forEach( card => {
        const elementos = document.createElement('div');
        elementos.classList.add(
            'row', 
            'row-cols-1', 
            'row-cols-md-4', 
            'mx-2', 
            'px-2', 
            'g-2',
        ); 
         elementos.innerHTML +=` 
         <div class="content col card">
         <img  class="imgall" src=${card.imagen}>
         <h3>${card.nombre}</h3>
         <p>${card.descrpcion}</p>
         <h6>${card.precio}</h6>
         <a href="#" class="btn btn-light float-right cardbutton"">Añadir al carro>></a>
        </div>`
        recienllegados.appendChild(elementos);
    });
    }
    Productoss();
    Productoss2();
