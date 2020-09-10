var tiempo = Date();



document.getElementById("añadirBoton").addEventListener("click", añadirNota);

let notas= [];


function añadirNota() {

    const nota = document.querySelector('#formulario').value;
    const notaObj = {
        id: Date.now(),
        texto: nota
    }
    notas = [...notas, notaObj];

    console.log(notas)
}