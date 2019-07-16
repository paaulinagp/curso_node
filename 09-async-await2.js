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

let getEmpleado = async (id ) => {
    let empleado = empleados.find( empleado => empleado.id===id);
    
    if(!empleado){
        throw new Error(`No existe el empleado con id: ${id}`);
    }
    else {
        return empleado;
    }
}

let getSalario = async(empleado) => {
    let salario = salarios.find(salario => salario.id===empleado.id)
    if(!salario){
        throw new Error(`No se encontro salario para el usuario: ${empleado.nombre}`);
    }
    else return { nombre: empleado.nombre, salario: salario.salario };
    
}


let getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);

    return `El salario de ${salario.nombre} es de $${salario.salario}`;
}

getInformacion(1)
.then( msg => {
    console.log(msg);
})
.catch( err => {
    console.log(err)
});