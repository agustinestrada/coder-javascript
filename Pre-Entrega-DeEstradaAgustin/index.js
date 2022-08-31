let form = document.querySelector('form')
const preferencia = {}
let home = document.querySelector('.home')
let ofertas = document.querySelector('.ofertas')
let newsletter = document.querySelector('.newsletter')
let contacto = document.querySelector('.contacto')

let idiomaElegido = localStorage.getItem('idioma')

if (idiomaElegido != '' && idiomaElegido != null) {
    switch (idiomaElegido) {
        case 'en':
            ofertas.innerHTML = 'Sale!'
            contacto.innerHTML = 'Contact'
            break;
        case 'fr':
            ofertas.innerHTML = 'Offres!'
            contacto.innerHTML = 'Contact'
            home.innerHTML = 'Principal'
            newsletter.innerHTML = 'Bulletin'
            break;
        case 'es':
            home.innerHTML = 'Principal'
            newsletter.innerHTML = 'Suscripcion'
            break
        default:
            break;
    }
}

form.addEventListener('submit', (e) => {
    
    let nombre = document.querySelector('.nombre')
    let apellido = document.querySelector('.apellido')
    let email = document.querySelector('.email')
    let suscripcion = document.querySelector('#suscripcion')
    let idioma = document.querySelector('#idioma')

    let nombreError = document.querySelector('.nombre-error')
    let apellidoError = document.querySelector('.apellido-error')
    let emailError = document.querySelector('.email-error')

    if(nombre.value == ''){
        e.preventDefault()
        nombreError.innerHTML = 'El campo de nombre tiene que estar completo'
        nombre.classList.add('input-error')
    }
    
    if(apellido.value == ''){
        e.preventDefault()
        apellidoError.innerHTML = 'El campo de apellido tiene que estar completo'
        apellido.classList.add('input-error')
    }

    if(email.value == ''){
        e.preventDefault()
        emailError.innerHTML = 'El campo de email tiene que estar completo'
        email.classList.add('input-error')
    }

    preferencia.idioma = idioma.value

    localStorage.setItem('idioma',preferencia.idioma)

    console.log(suscripcion.value);
    console.log(idioma.value);



})




//console.log('este es un mensaje para los que saben abrir la consola... SHHH!!');

/* 
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
} */