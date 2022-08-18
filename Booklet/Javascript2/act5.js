let lista = []

while (lista.length < 4) {
    let valorIngresado = prompt('por favor ingrese un producto')
    if (valorIngresado) {
        lista.push(valorIngresado)        
    }
}

console.log(lista);