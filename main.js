import { FilesActions } from "./js/file.js";

// Funcion para iniciar el aplicativo
function main() {
    const dropArea = document.querySelector('.drop-area');
    const dragText = dropArea.querySelector('h2');
    const button = dropArea.querySelector('button');
    const input = dropArea.querySelector('#input-file');

    const filesActions = new FilesActions();
    let files;

    button.addEventListener('click', (e) => {
        input.click();
    });

    input.addEventListener('change', (e) => {
        files = this.files;
        dropArea.classList.add('active');
        // Llamamos el metodo showFile
        filesActions.showFile(files);
        dropArea.classList.remove('active');
    });
    dropArea.addEventListener('dragover', (e)=>{
        e.preventDefault();
        dropArea.classList.add('active');
        dragText.textContent = 'Suelta para subir los archivos';
    });

    dropArea.addEventListener('dragleave',(e)=>{
        e.preventDefault();
        dropArea.classList.remove('active');
        dragText.textContent = 'Arrastra y suelta imagenes';
    });

    dropArea.addEventListener('drop',(e)=>{
        e.preventDefault();
        files = e.dataTranfer.files;
        filesActions.showFile(files);
        dropArea.classList.remove('active');
        dragText.textContent = "Arrastra y suelta imagenes"
    })
}

main();