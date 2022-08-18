let cotizacion = parseInt(prompt('Por favor ingrese una cotization para el dolar'))

function cotizarDolar(pesos) {
    return console.log(pesos/cotizacion);
}

function cotizarPesos(dolar) {
    return console.log(dolar*cotizacion);
}

cotizarDolar(300)
cotizarPesos(300)
