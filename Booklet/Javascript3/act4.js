let nombres = []

while (nombres) {
    let valorIngresado = prompt('por favor ingrese un nombre')
    if (valorIngresado == 'Voldemort') {
        break
    }else{
        nombres.push(valorIngresado)
    }
}

alert(nombres);