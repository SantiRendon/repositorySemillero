let sum = (a, b) => { // 
    return a + b
}

// se define dos varaibles donde se guardarán los elementos llamados por id
let searchBtn = document.getElementById('search-btn')
let countryInp = document.getElementById('country-inp')

// se escucha el evento del boton
searchBtn.addEventListener('click', () => {
    // se obtiene el nombre del pais que digita el usuario
    let countryName = countryInp.value;
    //utilizamos la API y le enviamos el nombre del pais que completa la URL
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    // console.log(URL)

    // Generamos una respuesta donde se almacena todos los datos y utilizamos la URL
    fetch(finalURL)
        .then(res => res.json())
        .then(data => {
            // Prueba para saber donde están ubicados los datos y los mostraremos en consola
            console.log(data[0]);
            console.log(data[0].capital[0]);
            console.log(data[0].flags.svg);
            console.log(data[0].name.common);
            console.log(data[0].continents[0]);
            console.log(Object.keys(data[0].currencies)[0]);
            console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            console.log(Object.values(data[0].languages).toString().split(",").join(","));
           
        });

});
