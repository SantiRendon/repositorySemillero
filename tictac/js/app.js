let boton = document.querySelector('#btn-Start')
let contPartidas = document.querySelector('#sets')

//se leccionar turno del jugador 
let radPlayer1 = document.querySelector('#radioBtn1')
let radPlayer2 = document.querySelector('#radioBtn2')

let timer1 = document.querySelector('#izq #time')
let timer2 = document.querySelector('#der #time')

let turno = 1;

boton.addEventListener('click', e => {
    let input = window.prompt('Ingrese el numero de partidas')

    if (input > 0) {

        if (input % 2 == 0) {
            window.alert('El numero de partidas debe ser impar')
        } else {
            contPartidas.innerHTML = `Partidas: ${input}`
            boton.disabled = true;
            validarTurno()
        }
    } else {
        window.alert('Numero de partidas no valido')
    }


    function validarTurno() {
        if (radPlayer1.checked == true) {
            window.alert('Turno del jugador numero 1')
            cronometro(timer1)
        }
        else {
            if (radPlayer2.checked == true) {
                window.alert('Turno del jugador numero 2')
                cronometro(timer2)
            }
        }
    }




    function cronometro(timer) {
        timer.innerHTML = 0
        t = setInterval(() => {

            if (timer.innerHTML == 5) {

                window.alert('Tiempo agotado')

            } else {

                timer.innerHTML = parseInt(timer.innerHTML) + 1
            }
        }, 1000)


    }

});

function evaluar(element) {
    const clickar = document.querySelector('.square')


    //Horizontales
    if (clickar.children[0].innerHTML == element &&
        clickar.children[1].innerHTML == element &&
        clickar.children[2].innerHTML == element) {

        setTimeout(() => {
            window.alert("el elemento " + element + " a ganado")
        }, 100);
    }

    if (clickar.children[3].innerHTML == element &&
        clickar.children[4].innerHTML == element &&
        clickar.children[5].innerHTML == element) {

        setTimeout(() => {
            window.alert("el elemento " + element + " a ganado")
        }, 100);
    }

    if (clickar.children[6].innerHTML == element &&
        clickar.children[7].innerHTML == element &&
        clickar.children[8].innerHTML == element) {

        setTimeout(() => {
            window.alert("el elemento " + element + " a ganado")
        }, 100);
    }

    // vertical
    if (clickar.children[0].innerHTML == element &&
        clickar.children[3].innerHTML == element &&
        clickar.children[6].innerHTML == element) {

        setTimeout(() => {
            window.alert("el elemento " + element + " a ganado")
        }, 100);
    }
    if (clickar.children[1].innerHTML == element &&
        clickar.children[4].innerHTML == element &&
        clickar.children[7].innerHTML == element) {

        setTimeout(() => {
            window.alert("el elemento " + element + " a ganado")
        }, 100);
    }
    if (clickar.children[2].innerHTML == element &&
        clickar.children[5].innerHTML == element &&
        clickar.children[8].innerHTML == element) {

        setTimeout(() => {
            window.alert("el elemento " + element + " a ganado")
        }, 100);
    }

    //Diagonal
    if (clickar.children[0].innerHTML == element &&
        clickar.children[4].innerHTML == element &&
        clickar.children[8].innerHTML == element) {

        setTimeout(() => {
            window.alert("el elemento " + element + " a ganado")
        }, 100);
    }
    if (clickar.children[2].innerHTML == element &&
        clickar.children[4].innerHTML == element &&
        clickar.children[6].innerHTML == element) {

        setTimeout(() => {
            window.alert("el elemento " + element + " a ganado")
        }, 100);
    }
}


function marcar(obj) {
    if (turno == 1) {
        if (obj.target.innerHTML == "") {
            obj.target.innerHTML = 'X';
            turno = 2;
        }
    } else {
        if (obj.target.innerHTML == "") {

            obj.target.innerHTML = 'O';
            turno = 1;
        }
    }

    evaluar(obj.target.innerHTML);
}



// Tarea: pulir el cronometro y realizar el cambio de turno cuando un jugador seleccione uan casilla del triki
//agregar un limite de tiempo y que el jugador que exceda ese tiempo pierda automaticamente