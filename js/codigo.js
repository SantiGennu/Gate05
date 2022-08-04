
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
        <button id= "${item.id}" class="btn"><span class="material-icons">
        flight_takeoff
        </span></button>
        </div>
        </div>`
        contenedorDestinos.appendChild(div)

        let button = document.getElementById(`${item.id}`)
        button.addEventListener("click", () => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Tu destino ha sido agregado al carrito',
                showConfirmButton: false,
                timer: 1500,
            })
            agregarCarrito(item)
        })
        mostrarCarrito()




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
                                <button id= "${item.id}" class="btn" id="botonProducto"><span class="material-icons">
                                flight_takeoff
                                </span></button>
                            </div>
                        </div>`

        contenedorOfertas.appendChild(div)
        let btn = document.getElementById(`${item.id}`)
        btn.addEventListener("click", () => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Tu destino ha sido agregado al carrito',
                showConfirmButton: false,
                timer: 1500,
            })
            agregarCarrito(item)
        })

    })
}


function agregarCarrito(item) {

    let destino = listaDestinos.find(destino => destino.id === item.id)
    carrito.push(destino)
    localStorage.setItem("destino", JSON.stringify(carrito))
    console.log(destino)

    actualizarCarrito()
    console.log(carrito)

}


boton.addEventListener("click", mostrarCarrito)
function mostrarCarrito() {
    contenedorCarrito.innerHTML = ""

    if (carrito.length === 0) {
        let div = document.createElement("div")
        div.innerHTML = `<p id ="vacio" >EL CARRITO ESTA VACÍO</p>`
        contenedorCarrito.appendChild(div)
    }
    else {

        carrito.forEach(item => {
            let div = document.createElement("div")
            div.className = "contenedorCarrito d-flex"
            div.innerHTML = `<p class="col-6 align-items-end">${item.ciudad}</p>
                        <p class="col-6 align-items-end">Precio: $${item.precio} 
                        <button id=booking class="booking-btn${item.id}"><span class="material-icons">
                        flight_land
                        </span></button></p>
                        <button id="button${item.id}" class="remove-btn"><span class="material-icons" >
                        delete 
                        </span></button>
                        `

            contenedorCarrito.appendChild(div)
            actualizarCarrito()



            const btnEliminar = document.getElementById(`button${item.id}`)
            btnEliminar.addEventListener("click", () => {
                btnEliminar.parentElement.remove()
                carrito.forEach(item => item.id == `button${item.id}`)
                let index = carrito.indexOf(item)
                carrito.splice(index, 1)
                actualizarCarrito()
                mostrarCarrito()


            })


        })
    }
}


function actualizarCarrito() {
    cantidadCarrito.innerText = carrito.length
    total.innerText = carrito.reduce((acc, el) => acc + el.precio, 0)
}

function filtrarDestino(e) {
    let destinoFiltrado = listaDestinos.filter(destino => (destino.ciudad).toLowerCase().includes(e.target.value))
    mostrarProductos(destinoFiltrado)
    console.log(e.target.value)
}
window.addEventListener("keyup", filtrarDestino)


let pack = document.querySelectorAll(".contentPack")
console.log(pack)

// function mostrarPack() {
//     listaPack.forEach(item => {
//         let div = document.createElement("div")
//         div.className = "titlePack"
//         div.innerHTML = `<h1>${item.ciudad}</h1>
//                     </div>
//                     <div class="blockPack">
//                         <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ab ut perferendis inventore
//                             suscipit, atque temporibus totam voluptatibus doloribus praesentium</P>
//                         <p class="pricePack">
//                             <strong> Only ${item.precio}</strong>
//                         </p>
//                         <button id= "${item.id}" onclick="agregarCarrito()" type="button"> RESERVE </button>
//                     </div>`
//         pack.appendChild(div)
//         agregarCarrito(item)
       
//     })
// }
// actualizarCarrito()
// mostrarPack()