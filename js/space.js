function buscarImagenesNasa(query){
    const apiUrl = `https://images-api.nasa.gov/search?q=${query}`;

    return fetch(apiUrl)
        .then(response => response.json())
        .catch(error => console.log(error))
}

function renderDataPlaneta(data){
    if (data.collection && data.collection.items.length > 0) {

        resultadosContainer.innerHTML = "";
        data.collection.items.forEach(item => {
            const imageUrl = item.links[0].href
            const titulo = item.data[0].title
            const  descripcion = item.data[0].description;
            const fecha = item.data[0].date_created;

            const divResultado = document.createElement ('div');
            divResultado.classList.add('resultado')

            const imagen = document.createElement('img');
            imagen.src = imageUrl;
            
            const tituloElement = document.createElement('h2');
            tituloElement.textContent = titulo;

            const descripcionElement = document.createElement('p');
            descripcionElement.textContent = descripcion;

            const fechaElement = document.createElement('p');
            fechaElement.textContent = fecha;

            divResultado.appendChild(imagen);
            divResultado.appendChild(tituloElement);
            divResultado.appendChild(descripcionElement);
            divResultado.appendChild(fechaElement);
            
            resultadosContainer.appendChild(divResultado);
        });
    } else { resultadosContainer.textContent = "No se encontraron resultados." }
}

const resultadosContainer = document.getElementById("contenedor");
resultadosContainer.innerHTML ="";

const botonBuscar = document.getElementById("btnBuscar");

const campoDeTexto = document.getElementById("inputBuscar");

botonBuscar.addEventListener("click", function(){
    planetaNombre = campoDeTexto.value;
    buscarImagenesNasa(planetaNombre)
        .then(dataPlaneta => renderDataPlaneta(dataPlaneta));

})