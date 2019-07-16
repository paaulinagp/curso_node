//Al usar var se puede volver a asignar el valor despues
//En cambio con let no se puede

let nombre = 'Wolverine';
if(true){
    nombre = "Magento"
}
console.log(nombre);

let i = 'Hola mundo';
for(let i = 0; i<= 5;i++){
    console.log(`i:  ${ i }`);
}
console.log(i);