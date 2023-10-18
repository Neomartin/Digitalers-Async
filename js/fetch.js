// https://jsonplaceholder.typicode.com/
console.time('sync')
console.time('asincrona')

let users;
console.log(`Código synchrono`)

fetch(`https://jsonplaceholder.typicode.com/users`, {
    method: 'GET',
})

    .then(resp => resp.json())
    
    .then(usuarios => {

        console.log(usuarios)
        console.timeEnd('asincrona')
        users = usuarios;

        pintarUsuarios()
    }).catch(error => {
        Swal.fire(`Error`)
    })

function pintarUsuarios() {
    users.forEach(usr => document.write(usr.name))
}

console.log(`Código synchrono 2`)
console.log(`Código synchrono 3`)
console.timeEnd('sync')