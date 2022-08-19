function Tienda (nombre, dir, prop, rubro){
    this.nombre = nombre,
    this.direccion = dir,
    this.propietario = prop,
    this.rubro = rubro
    this.estaAbiertoAhora = function(hora){
        
        if (!hora) {
            let fecha = new Date
            let ahora = fecha.getHours()

            if ((ahora > 8 && ahora < 12) || (ahora > 15 && ahora < 19 )) {
                return `Son las ${ahora} el local esta abierto`
            }
            return `Son las ${ahora} el local esta cerrado`
        }else {
            if ((hora > 8 && hora < 12) || (hora > 15 && hora < 19 )) {
                return `Son las ${hora} el local esta abierto`
            }
            return `Son las ${hora} el local esta cerrado`
        }     
    },
    this.esPropietario = function (propietario) {
        if (propietario == this.propietario) {
            return true
        }
        return false
    }
}

let t1 = new Tienda('Tienda1', 'avenida siempre viva', 'yo', 'no se')

console.log(t1.esPropietario(prompt('Ingrese el nombre del propietario')))