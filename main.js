



document.getElementById("añadirBoton").addEventListener("click", añadirNota);

let notas= [];
myFunction()

function tiempo(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    var hh = today.getHours()-1;
    var mmm = today.getMinutes();
    var ss = today.getSeconds();
    today = dd+'-'+mm+'-'+yyyy+'-'+hh+':'+mmm+':'+ss;
    
    return today;


    }
    

function añadirNota() {
    const color = document.querySelector('#añadirBoton');
    let colorP = color.className
    const nota = document.querySelector('#formulario').value;  
    const notaObj = {
        id: tiempo(),
        texto: nota
    }
    notas = [...notas, notaObj];
    var importancia = `<button class='${colorP} uncheckable' styles></button>`
    console.log(importancia);
    console.log(color);
    console.log(colorP);
    var table = document.getElementById("tablanotas");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = notaObj.id;
    cell2.innerHTML = importancia;
    cell3.innerHTML = notaObj.texto;

}

function myFunction() {

  }


selectorColores()

function selectorColores() {
    cambiarColor1();
    cambiarColor2();
    cambiarColor3();
}

function cambiarColor1() {
    var colorboton = document.querySelector('#option1').addEventListener('click', cambiarBoton1);
    
}
function cambiarBoton1(){
    var colorbtnañadir = document.querySelector('#añadirBoton');
    colorbtnañadir.className = '';
    colorbtnañadir.classList.add("btn");    
    colorbtnañadir.classList.add("btn-warning");
      
}

function cambiarColor2() {
    var colorboton = document.querySelector('#option2').addEventListener('click', cambiarBoton2);
    
}
function cambiarBoton2(){
    var colorbtnañadir = document.querySelector('#añadirBoton');
    colorbtnañadir.className = '';
    colorbtnañadir.classList.add("btn");
    colorbtnañadir.classList.add("btn-danger");
      
}

function cambiarColor3() {
    var colorboton = document.querySelector('#option3').addEventListener('click', cambiarBoton3);
    
}
function cambiarBoton3(){
    var colorbtnañadir = document.querySelector('#añadirBoton');
    colorbtnañadir.className = '';
    colorbtnañadir.classList.add("btn");
    colorbtnañadir.classList.add("btn-success");
      
}