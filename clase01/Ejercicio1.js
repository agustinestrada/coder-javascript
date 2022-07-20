let leMetioOnda = false
let nombre, apellido, apodo, edad


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

if (apodo) {
    alert('Hola '+apodo+' nos encantaria que aportes tu '+edad+' años de sabiduría en esto!')
}else{
    alert('Hola '+nombre+' '+apellido+' nos encantaria que aportes tu '+edad+' años de sabiduría en esto!')    
}

console.log('este es un mensaje para los que saben abrir la consola... SHHH!!');