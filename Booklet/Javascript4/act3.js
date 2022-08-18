function impuesto(precio, porcentaje) {
    let precio1 = parseInt(prompt('Por favor ingrese un precio'))
    let porcentaje1 = parseInt(prompt('Por favor ingrese un porcentaje'))
    
    let porc = porcentaje1/100 + 1
    return console.log(precio1 * porc);
}

for (let i = 0; i < 5; i++) {
    impuesto()
}
