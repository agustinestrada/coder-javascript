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
})