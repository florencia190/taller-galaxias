function buscarImagenesNasa(query) {
    const apiUrl = `https://images-api.nasa.gov/search?q=${query}`;
}
fetch(apiUrl)
.then(response => response.json())
.then data => {
    
}