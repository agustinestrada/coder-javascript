function Tienda (nombre, dir, prop, rubro){
    this.nombre = nombre,
    this.direccion = dir,
    this.propietario = prop,
    this.rubro = rubro
}

let ingresados = ''

for (let i = 0; i < 5; i++) {
    tienda = new Tienda(prompt('Nombre'),
                            prompt('Direccion'),
                            prompt('Propietario'),
                            prompt('Rubro'))
    
    ingresados+= "Tienda: "+tienda.nombre+" "+
    "Direccion: "+tienda.direccion+" "+
    "Propitario: "+tienda.propietario+" "+
    "rubro: "+tienda.rubro+"\n";
}

console.log(ingresados);