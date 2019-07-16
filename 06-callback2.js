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

let getEmpleado = (id, callback) => {

    let empleado = empleados.find( empleado => empleado.id===id);

    if(!empleado){
        callback(`No existe el empleado con id: ${id}`);
    }
    else {
        callback(null, empleado);
    }

}

let getSalario = (empleado, callback) => {
    let salario = salarios.find(salario => salario.id===empleado.id)
    
    if(!salario){
        callback(`No se encontro salario para el usuario: ${empleado.nombre}`);
    }
    else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salario.salario
        });
    }
    
}

getEmpleado(2, (err,empleado) => {
    if(err){
        return console.log(err)
    }

    getSalario(empleado, (err, salario) => {
        if(err){
            return console.log(err)
        }
        console.log(`El salario de ${ salario.nombre } es de $${salario.salario}`)
    })
});

