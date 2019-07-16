//function sumar(a,b){
  //  return a+b;
//}

/** 
let sumar = (a,b) => {
return a+b;
};
**/

//Si solo es de solo una linea entonces se escribe así:

let sumar = (a,b) => a+b
console.log(sumar(10,20));

let saludar = () => 'Hola mundo';
console.log(saludar());

let saludarNombre = nombre => `Hola ${nombre}`;
console.log(saludarNombre('Paulina'));


let heroe = {
    nombre: 'Batman',
    apellido: 'Caballero de la noche',
    poder: 'dinero',
    getNombre(){
        return `${this.nombre} ${ this.apellido} - poder: ${this.poder}`
    }
};

console.log(heroe.getNombre());