<<<<<<< HEAD
function Tienda(nombre,direccion,propietario,rubro){
    this.nombre = nombre,
    this.direccion = direccion,
    this.propietario = propietario,
    this.rubro = rubro
}

let tienda1 = new Tienda('Volkswagen', 'Cerrito y Posadas', 'Dietrich', 'Automotriz')
let tienda2 = new Tienda('Luz Azul', 'Las Heras y Laprida', 'Gerardo Roca', 'Panaderia')
let tienda3 = new Tienda('Goyenechea', 'Mendoza st. 123, Mendoza, Arg', 'Familia Goyenechea', 'Vitivinicola')
=======
function Tienda (nombre, dir, prop, rubro){
    this.nombre = nombre,
    this.direccion = dir,
    this.propietario = prop,
    this.rubro = rubro
}

let tienda1 = new Tienda('Rutini','Alicia Moreau de Justo 1669','Familia Arizu','Vinos') 
let tienda2 = new Tienda('Volkswagen', 'Microcentro', 'Dietrich', 'Automotor')
let tienda3 = new Tienda('Mercado Libre','al lado del DOT','Galperin','E-commerce')
>>>>>>> dc52567395b43de24e6ad47ec66c6687fde9b9c8

console.log(tienda1, tienda2, tienda3);