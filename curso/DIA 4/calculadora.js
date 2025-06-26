function mostrarResultado(resultado) {
    document.getElementById("spanResultado").value = resultado;
}

function suma() {
    let elementoNumero1 = +document.getElementById("input1").value;
    let elementoNumero2 = +document.getElementById("input2").value;
    mostrarResultado(elementoNumero1 + elementoNumero2);
}

function resta() {
    let elementoNumero1 = +document.getElementById("input1").value;
    let elementoNumero2 = +document.getElementById("input2").value;
    mostrarResultado(elementoNumero1 - elementoNumero2);
}

function multiplicar() {
    let elementoNumero1 = +document.getElementById("input1").value;
    let elementoNumero2 = +document.getElementById("input2").value;
    mostrarResultado(elementoNumero1 * elementoNumero2);
}

function dividir() {
    let elementoNumero1 = +document.getElementById("input1").value;
    let elementoNumero2 = +document.getElementById("input2").value;
    mostrarResultado(elementoNumero1 / elementoNumero2);
}

function potencia() {
    let elementoNumero1 = +document.getElementById("input1").value;
    let elementoNumero2 = +document.getElementById("input2").value;
    let resultado = Math.pow(elementoNumero1, elementoNumero2);
    mostrarResultado(resultado);
}

function raiz() {
    let elementoNumero1 = +document.getElementById("input1").value;
    let resultado = Math.sqrt(elementoNumero1);
    mostrarResultado(resultado);
}

function absoluto() {
    let elementoNumero1 = +document.getElementById("input1").value;
    let resultado = Math.abs(elementoNumero1);
    mostrarResultado(resultado);
}

function random() {
    let numeroRandom = Math.floor(Math.random() * 101);
    mostrarResultado(numeroRandom);
}