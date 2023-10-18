const URL = `https://fakestoreapi.com`
const cardSection = document.getElementById('card-container')
let productos;


function obtenerProductos() {
    axios.get(`${URL}/products`)
        .then(resp => {
            productos = resp.data;
            console.log(productos)

            pintarProductos(productos)
        })
        .catch((error) => {
            console.log(error)
        })
}

obtenerProductos()

function pintarProductos(arrayPintar) {

    arrayPintar.forEach(prod => {


        cardSection.innerHTML += `<div class="card" style="width: 100%">
        <img src="${prod.image}" class="card-img-top" alt="${prod.title}">
        <div class="card-body">
          <h5 class="card-title">${prod.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${prod.category}</h6>
          <p class="card-text">${prod.description}</p>
          <a href="#" class="btn mr-2"><i class="fas fa-link"></i> Ver más</a>
          <a href="#" class="btn "><i class="fab fa-github"></i> Compra ${prod.id}</a>
        </div>
      </div>`
    })

}
