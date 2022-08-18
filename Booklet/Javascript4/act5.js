function validacion(cadena){
    return cadena != '';
}
let entrada =  prompt("INGRESAR CADENA");
while (entrada != 'ESC') {
    alert(validacion(entrada));
    entrada = prompt("INGRESAR CADENA");
}
