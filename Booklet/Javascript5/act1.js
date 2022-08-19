function Tienda (nombre, dir, prop, rubro){
    this.nombre = nombre,
    this.direccion = dir,
    this.propietario = prop,
    this.rubro = rubro
}

let tienda1 = new Tienda('Rutini','Alicia Moreau de Justo 1669','Familia Arizu','Vinos') 
let tienda2 = new Tienda('Volkswagen', 'Microcentro', 'Dietrich', 'Automotor')
let tienda3 = new Tienda('Mercado Libre','al lado del DOT','Galperin','E-commerce')

console.log(tienda1, tienda2, tienda3);