let botones = document.getElementsByClassName("numeros")
let resultado = document.getElementById("resultado")
let param = ""

for (const key in botones) {
    if (!Object.hasOwn(botones, key)) continue;
    const boton = botones[key];
    console.log(boton)
    boton.addEventListener("click", pintar)   
}

function pintar( e ) {
    resultado.value += e.target.innerText
}

let operadores = document.getElementsByClassName("operadpres")
console.log(operadores)

for (const key in operadores) {
    if (!Object.hasOwn(operadores, key)) continue;
    const boton = operadores[key];
    console.log(boton)
    if(boton.innerText == "c")
        boton.addEventListener("click", borrar)
    if(boton.innerText == "+")
        boton.addEventListener("click",sumar)
    boton.addEventListener("click", pintar2)   
}

function pintar2(e) {
    console.log(e.target.innerText)
}

function borrar(){
    resultado.value = ""
}


//Operadores para hacer operaciones
function sumar(e){
    prm = resultado
    operacion = e.target.innerText
    resultado.value = ""
    e.target.style.backgroundColor = "red"
}

function igual(){
    if(operacion == "+"){
        resultado.value = parseInt (prm) + parseInt (prm2)
    }
}
