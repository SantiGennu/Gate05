let carrito = []
let contenedorDestinos = document.getElementById('contenedorDestinos')
let contenedorCarrito = document.getElementById("contenedorCarrito")
let cantidadCarrito = document.getElementById("cantidadCarrito")
let total = document.getElementById("precioTotal")
let boton = document.getElementById("boton2")
let contenedorOfertas = document.getElementById("contenedor-ofertas")


function mostrarProductos(listaDestinos) {
    contenedorDestinos.innerHTML = ""
    listaDestinos.forEach(item => {
        let div = document.createElement("div")
        div.className = "destino col-12 col-md-4 mt-3"
        div.innerHTML = `<div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="${item.img}">
                            <div class="card-body">
                                <h4 class="card-title">${item.ciudad} </h4>
                                <p class= "precio">$ ${item.precio}</p>
                                <button onclick="agregarCarrito(${item.id})" class="btn" id="botonProducto"><span class="material-icons">
                                flight_takeoff
                                </span></button>
                            </div>
                        </div>`
        contenedorDestinos.appendChild(div)

    })
}
mostrarProductos(listaDestinos)
mostrarOfertas()
function mostrarOfertas() {
    ofertaDestinos.forEach(item => {
        let div = document.createElement("div")
        div.className = "ofertas col-12 col-md-4 mt-3"
        div.innerHTML = `<div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="${item.img}">
                            <div class="card-body">
                                <h4 class="card-title">${item.ciudad} </h4>
                                <p class= "precio">$ ${item.precio}</p>
                                <button onclick="agregarCarrito(${item.id})" class="btn" id="botonProducto"><span class="material-icons">
                                flight_takeoff
                                </span></button>
                            </div>
                        </div>`

        contenedorOfertas.appendChild(div)
    })
}

function agregarCarrito(idDestino) {
    let destino = listaDestinos.find(destino => destino.id === idDestino)
    carrito.push(destino)
    localStorage.setItem("destino", JSON.stringify(carrito))
console.log(destino)
    actualizarCarrito()
    console.log(carrito)
}
boton.addEventListener("click", mostrarCarrito)
function mostrarCarrito() {
    contenedorCarrito.innerHTML = ""

    carrito.forEach(item => {
        let div = document.createElement("div")
        div.className = "contenedorCarrito d-flex"
        div.innerHTML = `<p class="col-6 align-items-end">${item.ciudad}</p>
                        <p class="col-6 align-items-end">Precio: $${item.precio} </p>
                        <button class="remove-btn"><span class="material-icons" id="button${item.id}">
                        delete 
                        </span></button>`
        contenedorCarrito.appendChild(div)
        actualizarCarrito()

        const btnEliminar = document.getElementById(`button${item.id}`)
        btnEliminar.addEventListener("click", () => {
            btnEliminar.parentElement.parentElement.remove()
            carrito.forEach(item => item.id == `button${item.id}`)
            let index = carrito.indexOf(item)
            carrito.splice(index, 1)
            actualizarCarrito()


        })


    })
}


function actualizarCarrito() {
    cantidadCarrito.innerText = carrito.length
    total.innerText = carrito.reduce((acc, el) => acc + el.precio, 0)
}

function borrarElemento(e) {
    btn = e.target;
    btn.parentElement.parentElement.remove();
    const index = carrito.map(destino => destino.id == `button${destino.id}`).indexOf(e);
    carrito.splice(index, 1);
    actualizarCarrito()
    console.log(e.target)

}
function filtrarDestino (e){
    let destinoFiltrado = listaDestinos.filter(destino => (destino.ciudad).toLowerCase().includes(e.target.value))
    mostrarProductos(destinoFiltrado)
    console.log(e.target.value)
}
window.addEventListener("keyup", filtrarDestino)


