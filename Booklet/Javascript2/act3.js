let numeroElegido = parseInt(prompt('Por favor ingresar un numero entero del 1 al 4 inclusive'))

switch (numeroElegido) {
    case 1:
        console.log('Elegiste a Homero');
        break;
    case 2:
        console.log('Elegiste a Marge');
        break;
    case 3:
        console.log('Elegiste a Bart');
        break
    case 4:
        console.log('Elegiste a Lisa');
        break;
    default:
        console.log('Estas afuera');
        break;
}