let heroe = {
    nombre: 'Batman',
    apellido: 'Caballero de la noche',
    poder: 'dinero',
    getNombre: function() {
        return `${this.nombre} ${ this.apellido} - poder: ${this.poder}`
    }
};

console.log(heroe.getNombre())

//Destructuracion
let { nombre: primerNombre, apellido, poder } = heroe;

console.log(primerNombre);
