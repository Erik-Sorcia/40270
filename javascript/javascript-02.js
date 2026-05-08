let botones = document.getElementsByClassName("numeros");
let resultado = document.getElementById("resultado");
let prms = [];
let operacion;

for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones, key)) {
        const boton = botones[key];
        boton.addEventListener("click", pintar);
    }
}

function pintar(e) {
    resultado.value += e.target.innerText;
}

let operadores = document.getElementsByClassName("operadores");

for (const key in operadores) {
    if (Object.prototype.hasOwnProperty.call(operadores, key)) {
        const boton = operadores[key];
        if (boton.innerText == "c" || boton.innerText == "Ce") {
            boton.addEventListener("click", borrar);
        } else if (boton.innerText == "=") {
            boton.addEventListener("click", igual);
        } else {
            boton.addEventListener("click", obtener_parametros);
        }
    }
}

function borrar() {
    resultado.value = "";
    prms = [];
    operacion = "";
}

function obtener_parametros(e) {
    prms.push(resultado.value);
    operacion = e.target.innerText;
    resultado.value = "";
}

function igual() {
    prms.push(resultado.value);
    let r = 0;
    let bandera = false;
    let op = operacion;

    for (const key in prms) {
        if (Object.prototype.hasOwnProperty.call(prms, key)) {
            const prm = prms[key];
            switch (op) {
                case "+":
                    r += parseInt(prm);
                    break;
                case "-":
                    if (bandera == false) {
                        r = parseInt(prm);
                        bandera = true;
                    } else {
                        r -= parseInt(prm);
                    }
                    break;
                case "*":
                    if (bandera == false) {
                        r = parseInt(prm);
                        bandera = true;
                    } else {
                        r *= parseInt(prm);
                    }
                    break;
                case "/":
                    if (bandera == false) {
                        r = parseInt(prm);
                        bandera = true;
                    } else {
                        r /= parseInt(prm);
                    }
                    break;
            }
        }
    }
    resultado.value = r;
    prms = [];
}