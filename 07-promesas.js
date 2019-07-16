let empleados = [ 
    {
        id:1,
        nombre: 'Paulina'
    }, 
    {
        id:2,
        nombre: 'Victor'
    },
    {
        id:3,
        nombre: 'Mía'
    }
];

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = (id ) => {

    return new Promise((resolve, reject) => {
        let empleado = empleados.find( empleado => empleado.id===id);
    
        if(!empleado){
            reject(`No existe el empleado con id: ${id}`);
        }
        else {
            resolve(empleado);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salario = salarios.find(salario => salario.id===empleado.id)
        
        if(!salario){
            reject(`No se encontro salario para el usuario: ${empleado.nombre}`);
        }
        else {
            resolve({
                nombre: empleado.nombre,
                salario: salario.salario
            });
        }
    });
}

getEmpleado(1).then( empleado => {
    getSalario(empleado).then( salario => {
        console.log(salario)
    }, (err)=> {
        console.log(err);    
    });
}, (err)=> {
    console.log(err);
});

//Encadenando promesas
getEmpleado(1).then( empleado => {
    return getSalario(empleado);
})
.then( salario => {
    console.log(`El salario de ${salario.nombre} es de $${salario.salario}`)
})
.catch( err => {
    console.log(err);
});