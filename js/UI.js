// Clase para la interaccion con el html
export class UI {

    //Metodo para mostrar las imagenes
    viewImage(file, id, fileUrl) {

        const image = `
        <div id="${id}" class="file-container">
            <img src="${fileUrl}" alt="${file.name}" width="50px">
            <div class="status">
                <span>${file.name}</span>
                <span class="status-text">Loading...</span>
            </div>
        </div>`;
        const html = document.querySelector("#preview").innerHTML;
        document.querySelector('#preview').innerHTML = image + html;
    }

}