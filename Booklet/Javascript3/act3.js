let alumnos = []

while (alumnos.length < 10) {
    let valorIngresado = prompt('por favor ingrese un alumno')
    if (valorIngresado) {
        alumnos.push(valorIngresado)        
    }
}

alert(alumnos);