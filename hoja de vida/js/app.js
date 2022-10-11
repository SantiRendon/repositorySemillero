let img01 = document.querySelector('#imgContainer1');
let img02 = document.querySelector('#imgContainer2');
let img03 = document.querySelector('#imgContainer3');

let drop01 = document.querySelector('#drop1');
let drop02 = document.querySelector('#drop2');
let drop03 = document.querySelector('#drop3');

// se ponen los id de las imagenes y se envia la informacion con dataTranfer
img01.addEventListener('dragstart', e => {
    let id = 1
    e.dataTransfer.setData('ID', id)
});
img02.addEventListener('dragstart', e => {
    let id = 2
    e.dataTransfer.setData('ID', id)
});
img03.addEventListener('dragstart', e => {
    let id = 3
    e.dataTransfer.setData('ID', id)
});

//se realiza el preventDefault para permitir el drop
drop01.addEventListener('dragover', e => {
    e.preventDefault();
});
drop02.addEventListener('dragover', e => {
    e.preventDefault();
});
drop03.addEventListener('dragover', e => {
    e.preventDefault();
});


//drop de los elementos dentro del div
drop01.addEventListener('drop', e => {

    let key = e.dataTransfer.getData('ID')


    if (key == 1) {
        drop01.appendChild(img01)
    } else {
        drop01.setAttribute('style', 'border-color: #FF7B7B;');

        setTimeout(() => {
            window.alert('La imagen no corresponde a informacion')
        }, 100);

        setTimeout(() => {
            drop01.setAttribute('style', 'border-color: #1e272e;');
        }, 3500);
    }

});
drop02.addEventListener('drop', e => {

    let key = e.dataTransfer.getData('ID')


    if (key == 2) {
        drop02.appendChild(img02)
    } else {

        drop02.setAttribute('style', 'border-color: #FF7B7B;');

        setTimeout(() => {
            window.alert('La imagen no corresponde a gustos')
        }, 100);

        setTimeout(() => {
            drop02.setAttribute('style', 'border-color: #1e272e;');
        }, 3500);
    }

});
drop03.addEventListener('drop', e => {

    let key = e.dataTransfer.getData('ID')


    if (key == 3) {
        drop03.appendChild(img03)
    } else {
        drop03.setAttribute('style', 'border-color: #FF7B7B;');
        
        setTimeout(() => {
            window.alert('La imagen no corresponde a cursos')
        }, 100);

        setTimeout(() => {
            drop03.setAttribute('style', 'border-color: #1e272e;');
        }, 3500);
    }

});






