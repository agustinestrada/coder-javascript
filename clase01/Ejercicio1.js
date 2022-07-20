let nombre = prompt('Por favor ingresa solo tu nombre')
let apellido = prompt('Por favor ingresa tu apellido')

let apodo = prompt('De ahora en mas, queres que te llamemos por tu nombre o preferís un apodo. Si es así por favor ingresalo acá')
let edad = parseInt(prompt('Por favor introduzca su edad'))

let variablesAChequear = [nombre,apellido,edad]
let leMetioOnda = true

variablesAChequear.forEach(element => {
    if(element == '' || element == null || isNaN(edad)){
    leMetioOnda = false
    }
})

if(!leMetioOnda){
   alert('Ponele volunta daale ponele voluntaa')
}else{
    if (apodo) {
        alert('Hola '+apodo+' nos encantaria que aportes tu '+edad+' años de sabiduría en esto!')
    }else{
        alert('Hola '+nombre+' '+apellido+' nos encantaria que aportes tu '+edad+' años de sabiduría en esto!')    
    }
}

console.log('este es un mensaje para los que saben abrir la consola... SHHH!!');