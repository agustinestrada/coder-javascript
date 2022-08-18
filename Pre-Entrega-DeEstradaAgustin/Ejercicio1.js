let leMetioOnda = false
let nombre, apellido, apodo, edad
let saludo = document.querySelector('h1.saludo')

while (!leMetioOnda) {
    nombre = prompt('Por favor ingresa solo tu nombre')
    apellido = prompt('Por favor ingresa tu apellido')
    apodo = prompt('De ahora en mas, queres que te llamemos por tu nombre o preferís un apodo. Si es así por favor ingresalo acá')
    edad = parseInt(prompt('Por favor introduzca su edad'))
    leMetioOnda = true
    
    let variablesAChequear = [nombre,apellido,edad]
    variablesAChequear.forEach(element => {
        if(element == '' || element == null || isNaN(edad)){
        leMetioOnda = false
        }
    })

    if(!leMetioOnda){
        alert('Ponele volunta daale ponele voluntaa')
    }
}

let usuario = {
    nombre,
    apellido,
    apodo,
    edad
}

let nombreDato = document.querySelector('div span.nombre')
let apellidoDato = document.querySelector('div span.apellido')
let apodoDato = document.querySelector('div span.apodo')
let edadDato = document.querySelector('div span.edad')

if (apodo) {
    alert('Hola '+apodo+' nos encantaria que aportes tu '+edad+' años de sabiduría en esto!')
    saludo.innerHTML = 'Hola ' + apodo
 
    nombreDato.innerHTML = 'Nombre: ' + usuario.nombre
    apellidoDato.innerHTML = 'Apellido: ' + usuario.apellido
    apodoDato.innerHTML = 'Apodo: ' + usuario.apodo
    edadDato.innerHTML = 'Edad: ' + usuario.edad

}else{
    alert('Hola '+nombre+' '+apellido+' nos encantaria que aportes tu '+edad+' años de sabiduría en esto!')    
    saludo.innerHTML = 'Hola ' + nombre + ' ' + apellido

    nombreDato.innerHTML = 'Nombre: ' + usuario.nombre
    apellidoDato.innerHTML = 'Apellido: ' + usuario.apellido
    apodoDato.innerHTML = 'Apodo: El usuario no eligio apodo'
    edadDato.innerHTML = 'Edad: ' + usuario.edad
}

console.log('este es un mensaje para los que saben abrir la consola... SHHH!!');

console.log(usuario);