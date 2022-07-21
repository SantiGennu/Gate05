let carrito = []
let contenedorDestinos = document.getElementById('contenedorDestinos')
let contenedorCarrito = document.getElementById("contenedorCarrito")
let cantidadCarrito = document.getElementById("cantidadCarrito")
let total = document.getElementById("precioTotal")
let boton = document.getElementById("boton2")

mostrarProductos()
function mostrarProductos() {
    listaDestinos.forEach(item => {
        let div = document.createElement("div")
        div.className = "destino col-12 col-md-4 mt-3"
        div.innerHTML = `<div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="${item.img}">
                            <div class="card-body">
                                <h3 class="card-title">${item.ciudad} </h3>
                                <p>$ ${item.precio}</p>
                                <a href="#" onclick="agregarCarrito(${item.id})" class="btn" id="botonProducto">Agregar al carrito</a>
                            </div>
                        </div>`
        contenedorDestinos.appendChild(div)

    })
}

function agregarCarrito(idDestino) {
    let destino = listaDestinos.find(destino => destino.id === idDestino)
    carrito.push(destino)

    actualizarCarrito()

    console.log(carrito)
}
boton.addEventListener("click", mostrarCarrito)
function mostrarCarrito() {

    carrito.forEach(item => {
        let div = document.createElement("div")
        div.className = "contenedorCarrito d-flex"
        div.innerHTML = `<p class="col-6 align-items-end">${item.ciudad}</p>
                        <p class="col-6 align-items-end">Precio: $${item.precio} </p>
                        <button class="remove-btn">Borrar</button>`
        contenedorCarrito.appendChild(div)

        let botonesBorrar = div.querySelectorAll(".remove-btn");
        for (let boton of botonesBorrar) {
            boton.addEventListener("click", borrarElemento);
           
        }

    })
}


function actualizarCarrito() {
    cantidadCarrito.innerText = carrito.length
    total.innerText = carrito.reduce((acc, el) => acc + el.precio, 0)
}
function borrarElemento(e) {
    btn = e.target;
        btn.parentElement.remove();
        actualizarCarrito()
       
}
//Problemas a resolver: -cuando elimino algun destino del carrito no me elimina el valor de cada destino ni me actualiza el length
//                      -cada vez que cliqueo el carrito, me duplica el destino.


