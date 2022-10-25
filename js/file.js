import { UI } from "./UI.js";

// Clase para las acciones de imagenes
export class FilesActions {

    // Metodos donde mostramos las imagenes dentro del aplicativo
    showProcessFile(file) {
        const doctype = file.type;
        const validExtensions = ["image/jpeg",
            "image/jpg",
            "image/png",
            "image/gif"];

        if (validExtensions.includes(doctype)) {
            //Si el archivo valido

            const fileReader = new fileReader();
            const id = `file-${Math.random().toString(32).substring(7)}`

            fileReader.addEventListener('load', (e) => {
                const fileUrl = fileReader.result;

                const ui = new UI();
                ui.viewImage(file, id, fileUrl);
            });

            fileReader.readAsDataURL(file);

        } else {
            // Si el archivo no es valido
            console.error()
            alert('No es un archivo valido')
        }
    }

    //Metodo para mostrar las imagenes
    showFile(){
        //Mostramos solo una imagen
        if (files.length === undefined){
            this.showProcessFile(files);
        }else{
            //Mostramos varias imagenes
            for (const file of files){
                this.showProcessFile(files);
            }
        }
    }
}



