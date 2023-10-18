let usuario;
console.time(`start`)

function fnSincrona() {
    return 'John Doe'
}

function fnAsincrona() {
    return new Promise( (resolver, rechazar) => {

        setTimeout(() => {
            console.timeEnd(`promesa`)
            return resolver('No user')

        },2000)

    })
}

console.time(`promesa`)
fnAsincrona()
    .then((nombre) => {

        usuario = nombre
        console.log(`USUARIO`, usuario)

    })
    .catch((error) => {
        console.error(`Error al obtner el usuario`)
    })





console.timeEnd(`start`)