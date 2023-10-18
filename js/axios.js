axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(resp => {
        console.log(resp.data)
    })