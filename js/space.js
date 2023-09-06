function buscarImagenesNasa(query){
    const apiUrl = `https://images-api.nasa.gov/search?q=${query}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
}

const imageUrl = item.links[0].href
const titulo = item.data[0].title
const  descripcion = item.data[0].description;
const fecha = item.data[0].date_created;

const divResultado = document.createElement ('div');
divResultado.classList.add('resultado')

const imagen = document.createElement('img');
imagen.src = imagenUrl;
 
const tituloElement = document.createElement('h2');
tituloElement.textContent = titulo;

const descripcionElement = document.createElement('p');
descripcionElement.textContent = descripcion;

const fechaElement = document.createElement('p');
fechaElement.textContent = fecha;

divresultado.appendchild(imagen);
divresultado.appendchild(tituloElement);
divresultado.appendchild(descripcionElement);
divresultado.appendchild(fechaElement);

resultadosContainer.appendChild(divResultado);
;


const botonBuscar = document.getElementById("busqueda");
botonBuscar.addEventListener("click", function(){
    buscarImagenesNasa(campoDeTexto);

})

const campoDeTexto = document.getElementById("formulario-busqueda");



//id="formulario-busqueda" 


 
