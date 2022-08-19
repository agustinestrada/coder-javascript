/* Declarar un método para la clase Tienda con la siguiente cabecera estaAbierto(hora).
Este retorna true si la hora enviada está entre las 08 y 12, o entre las 15 y 19.
Caso contrario, se retorna false.
Luego invocar al menos un (1) objeto usando esta clase, y solicitar al usuario tres (3) horas.
Informar por alerta si la tienda está abierta, en función de la hora ingresada.
 */

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
    }
}

let t1 = new Tienda('Tienda1', 'avenida siempre viva', 'yo', 'no se')

console.log(t1.estaAbiertoAhora(prompt('Por favor ingrese la hora')))