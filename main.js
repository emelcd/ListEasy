document.getElementById("añadirBoton").addEventListener("click", añadirNota);
let notas= [];


function tiempo(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    var hh = today.getHours()-1;
    var mmm = today.getMinutes();
    var ss = today.getSeconds();
    today = dd+'/'+mm+'/'+yyyy+'<br>'+hh+':'+mmm+':'+ss;
    return today;
    } 
function añadirNota() {
    
    const color = document.querySelector('#añadirBoton');
    let colorP = color.className;
    let colorPArray = '';
    
    if (colorP == 'btn btn-warning') {
        colorPArray = 'Nota Normal';
    } else if (colorP == 'btn btn-danger'){
        colorPArray = 'Nota Importante';
    } else {
        colorPArray = 'Nota Otros';
    }
    const nota = document.querySelector('#formulario').value;  
    var importancia = `<button class='${colorP} uncheckable' styles></button>`
    
   
    const notaObj = {
        id: Date.now(),
        dh: tiempo(),
        imp: colorPArray,
        texto: nota
    }

    notas = [...notas, notaObj];
    // Crear la Tabla 

    var table = document.getElementById("tablanotas");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    var textoTransformado = notaObj.texto + `<button class='btn' onclick="deleteRow(this)">❌</button>`; 
    cell1.innerHTML = notaObj.dh;
    cell2.innerHTML = importancia;
    cell3.innerHTML = textoTransformado;

    //Pone el Fondo Blanco y Justifica a la izquierda
    var t = document.getElementById("tablanotas"),
    d = t.getElementsByTagName("tr")[1].style.backgroundColor = "white";
    v = t.getElementsByTagName("td")[3,2].style.textAlign = "left";


    //Borra el ChangeLog de la página principal
    document.querySelector("#sendEmailButton").style.display = 'block';
    if (document.querySelector('#notasdeVersion') !== null) {
        document.querySelector('#notasdeVersion').click();
    }
    
    

}
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tablanotas").deleteRow(i);
}
/*  SELECTOR COLORES DE BOTONES*/
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
/* ENVIAR EMAIL */
function sendEmail() {

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mick.altura@gmail.com",
        Password : "172BC0AEE2BE606879DACDE8633D0B3EA94E",
        To : 'mick.altura@gmail.com',
        From : "mick.altura@gmail.com",
        Subject : `Generado por ListEasy (${tiempo()})`,
        Body : `${createPrev(notas)}`
    }).then(
      message => alert(message)
    );

}

var input = document.querySelector('#formulario');

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("añadirBoton").click();
  }
});

const buttonM = document.querySelector('#botonPrevisualizar');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
 
buttonM.addEventListener('click', () => {
    popup.style.display = 'block';
    createPrev(notas);
    
});
 
close.addEventListener('click', () => {
    popup.style.display = 'none';
});
 
popup.addEventListener('click', e => {
    // console.log(e);
    if(e.target.className === 'popup-wrapper') {
        popup.style.display = 'none';
    }
});



function createPrev(data){
    
    var popdata = document.querySelector('#popNotas');
    
    
    for (i = 0; i < notas.length; i++) {
        var prueba = `
        <ul>
        <il><strong>${data[i].imp}:</strong></il>
        <il>${data[i].texto}</il>
        </ul>
        `
        popdata.innerHTML += prueba;
        
    }
    console.log (prueba)
    return prueba
    
}