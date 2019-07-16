let getNombre = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('Paulina')
        }, 3000)
    })
};

let saludo = async () => {
    let nombre = await getNombre();

    return `Hola ${ nombre }`
}

saludo().then( msg => {
    console.log(msg)
})
.catch( error => {
    console.log(error)
})