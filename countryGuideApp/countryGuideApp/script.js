//* se define tres varaibles donde se guardarán los elementos llamados por id
let searchBtn = document.getElementById('search-btn')
let countryInp = document.getElementById('country-inp')
let result = document.getElementById('result');

//* se escucha el evento del boton
searchBtn.addEventListener('click', () => {
    //* se obtiene el nombre del pais que digita el usuario
    let countryName = countryInp.value;
    //*utilizamos la API y le enviamos el nombre del pais que completa la URL
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    

    // console.log(URL)

    //* Generamos una respuesta donde se almacena todos los datos y utilizamos la URL
    fetch(finalURL)
        .then(res => res.json())
        .then(data => {
            //* Prueba para saber donde están ubicados los datos y los mostraremos en consola
            console.log(data[0]);
            // console.log(data[0].capital[0]);
            // console.log(data[0].flags.svg);
            // console.log(data[0].name.common);
            // console.log(data[0].continents[0]);
            // console.log(Object.keys(data[0].currencies)[0]);
            // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            // console.log(Object.values(data[0].languages).toString().split(",").join(","));

            result.innerHTML = `
            <img src="${data[0].flags.svg}" class="flag-img">
            <h2>${data[0].name.common}</h2>
            <div class= "data-wrapper">
                <div class="data-wrapper">
                <h4>capital:</h4>
                <span>${data[0].capital[0]}</span>
            <div>
        </div>

            <div class= "wrapper">
                <div class="data-wrapper">
                <h4>continet:</h4>
                <span>${data[0].continents[0]}</span>
            <div>
        </div>
        
            <div class= "wrapper">
                <div class="data-wrapper">
                <h4>population:</h4>
                <span>${data[0].population}</span>
            <div>
        </div>

            <div class= "wrapper">
                <div class="data-wrapper">
                <h4>currency:</h4>
                <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)}</span>
            <div>
        </div>

            <div class= "wrapper">
                <div class="data-wrapper">
                <h4>common languages:</h4>
                <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span>
            <div>
        </div>
        `;
           
        }).catch(() => {
            if (countryName.lenght == 0) {
                result.innerHTML = `
                <h3>The input field cannot be empty</h3>
                `;
            } else {
                result.innerHTML = `
                <h3>Please enter a valid country name </h3>
                `;
            }
        });

});
