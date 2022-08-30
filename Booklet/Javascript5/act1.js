function Tienda(nombre,direccion,propietario,rubro){
    this.nombre = nombre,
    this.direccion = direccion,
    this.propietario = propietario,
    this.rubro = rubro
}

let tienda1 = new Tienda('Volkswagen', 'Cerrito y Posadas', 'Dietrich', 'Automotriz')
let tienda2 = new Tienda('Luz Azul', 'Las Heras y Laprida', 'Gerardo Roca', 'Panaderia')
let tienda3 = new Tienda('Goyenechea', 'Mendoza st. 123, Mendoza, Arg', 'Familia Goyenechea', 'Vitivinicola')

console.log(tienda1, tienda2, tienda3);