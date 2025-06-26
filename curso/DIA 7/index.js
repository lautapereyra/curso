function crearTiendas(contenedorId, min, cantidadTiendas) {
    let elementoContenedor = document.getElementById(contenedorId);
    for (let conteoTiendas = 1; conteoTiendas <= cantidadTiendas; conteoTiendas++) {
        let textoEtiqueta = "Tienda" + conteoTiendas;
        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);
        elementoContenedor.appendChild(parrafoTienda);
    }
}

function crearParrafoTienda(textoLabel, valorMin) {
    let elementoParrafo = document.createElement("p");
    let elementoEtiqueta = document.createElement("label");
    elementoEtiqueta.innerText=textoLabel + ": "
    elementoEtiqueta.setAttribute("for", textoLabel);
    let elementoInput = document.createElement("input");

    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value", 0);

    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);
    return elementoParrafo;
}

function extraerNumeroDesdeElemento(elemento) {
    let miTexto = elemento.value;
    let miNumero = Number(miTexto);
    return miNumero;
}

function calcular() {
    let ventas = [];

    let posicionVentas=0;
    let elementosVentas=document.getElementById("itemsTiendas");

    for (let item of elementosVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);
        ventas[posicionVentas] = valorVenta;
        posicionVentas = posicionVentas + 1;
    }

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    let mensajeSalida = "Total Ventas: " + totalVentas + " / " + "Mas ventas: " + ventaMayor
        + " / " + "Menos ventas: " + ventaMenor;
    let elementoSalida = document.getElementById("parrafoSalida");
    elementoSalida.textContent = mensajeSalida;
}
function sumarTotal(array) {
    let sumaVentas = 0;
    for (let venta of array) {
        sumaVentas += venta;
    }
    return sumaVentas;
}

function calcularMayor(array) {
    let mayor = array[0];
    for (let venta of array) {
        if (venta > mayor)
            mayor = venta;
    }
    return mayor;
}

function calcularMenor(array) {
    let menor = array[0];
    for (let venta of array) {
        if (venta < menor)
            menor = venta;
    }
    return menor;
}