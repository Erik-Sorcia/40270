
let botones = document.getElementsByTagName("button");
let resultado = document.getElementById("resultado");
let prm;
let prm2;
let operacion;

for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones, key)) {
        const boton = botones[key];
        console.log(boton);
        boton.addEventListener("click", pintar);
    }
}

function pintar(e) {
    let valor = e.target.innerText;
    if (valor == "+") {
        sumar(e);
    }
    else if (valor == "-") {
        restar(e);
    }
    else if (valor == "*"){
        multiplicar(e);
    }
    else if (valor == "/"){
        dividir(e);
    }
    else if (valor == "=") {
        igual();
    }
    else if (valor == "c") {
        limpiar(e)
    }
    else {
        resultado.value += valor;
    }
}

let operadores = document.getElementsByClassName("numeros");
console.log(operadores);

for (const key in operadores) {

    if (Object.prototype.hasOwnProperty.call(operadores, key)) {
        const boton = operadores[key];
        console.log(boton);
        boton.addEventListener("click", pintar2);
    }
}

function pintar2(e) {
    console.log(e.target.innerText);
}

function limpiar(e) {
    resultado.value = "";
    prm = "";
    prm2 = "";
    operacion = "";
}

function sumar(e) {
    prm = resultado.value;
    operacion = e.target.innerText;
    resultado.value = "";
    e.target.style.backgroundColor = "red";
}

function restar(e) {
    prm = resultado.value;
    operacion = e.target.innerText;
    resultado.value = "";
    e.target.style.backgroundColor = "red";
}

function multiplicar(e) {
    prm = resultado.value;
    operacion = e.target.innerText;
    resultado.value = "";
    e.target.style.backgroundColor = "red";
}

function dividir(e) {
    prm = resultado.value;
    operacion = e.target.innerText;
    resultado.value = "";
    e.target.style.backgroundColor = "red";
}

function igual() {
    prm2 = resultado.value;
    if (operacion == "+") {
        resultado.value = parseInt(prm) + parseInt(prm2);
    }
    if (operacion == "-") {
        resultado.value = parseInt(prm) - parseInt(prm2);
    }
    if (operacion == "*") {
        resultado.value = parseInt(prm) * parseInt(prm2);
    }
    if (operacion == "/") {
        resultado.value = parseInt(prm) / parseInt(prm2);
    }
}

