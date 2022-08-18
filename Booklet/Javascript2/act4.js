let numero = parseInt(prompt('por favor ingrese un numero'))

if (numero < 1001) {
    console.log('Presupuesto bajo');
} else if(numero < 3001) {
    console.log('Presupuesto medio');
}else{
    console.log('Presupuesto alto');
}