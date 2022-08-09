
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
                timer: 1000,
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
                timer: 1000,
            })
            agregarCarrito(item)
        })

    })
}


function agregarCarrito(item) {

    let destino = listaDestinos.find(destino => destino.id === item.id)
    carrito.push(destino)
    localStorage.setItem("destino", JSON.stringify(carrito))
 

    actualizarCarrito()
  
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
                        <button id="booking" class="booking-btn${item.id}"><span class="material-icons">
                        flight_land
                        </span></button></p>
                        <button id="button${item.id}" class="remove-btn"><span class="material-icons" >
                        delete 
                        </span></button>
                        <div class"contenedorApi"></div>
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



let packContainer = document.getElementById("packContainer")
function mostrarPack(listaPack) {
    packContainer.innerHTML = ""
    listaPack.forEach(item => {
        let div = document.createElement("div")
        div.className = "modalPack"
        div.innerHTML = `<div class="backgroundPack">
                       
                             <div img id="background1Spain" src="${item.img1}">
                                <h3> ${item.ciudad1}</h3> </div>
                         
                           
                                 <div img id="background2Spain" src="${item.img2}">
                                 <h3> ${item.ciudad2}</h3></div>
                                 
                                 <div img id="background3Spain" src="${item.img3}">
                                 <h3> ${item.ciudad3}</h3></div>
                           
                     </div>
                        <div class="contentPack" >
                            <div class="titlePack">
                            <h1>${item.ciudad}</h1>
                            </div>
                            <div class="blockPack">
                                <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ab ut perferendis inventore
                                    suscipit, atque temporibus totam voluptatibus doloribus praesentium</P>
                                <p class="pricePack">
                                <strong> Only ${item.precio}</strong>
                                </p>
                                <button id= "btn${item.id}" class="btnReserve" type="button"> RESERVE </button>
                            </div>

                        </div> `
        packContainer.appendChild(div)
        let btn2 = document.getElementById(`btn${item.id}`)
        console.log(btn2)
        btn2.addEventListener("click", () => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Tu destino ha sido agregado al carrito',
                showConfirmButton: false,
                timer: 1000,
            })
            agregarPack(item)
        })

    })
}
mostrarPack(listaPack)

function agregarPack(item) {

    let countryPack = listaPack.find(destino => destino.id === item.id)
    carrito.push(countryPack)
    localStorage.setItem("destino", JSON.stringify(carrito))

    actualizarCarrito()
  

}

//FRASES SOBRE VIAJES DE MI ARCHIVO JSON//
// NECESITO BUSCARLE LA FORMA DE QUE ME LAS IMPRIMA DE MANERA ALEATORIA AL HACER CLICK//

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btnQuote");

btn.addEventListener("click", getQuote);

function getQuote() {
    fetch("./quotes.json")
        .then(response => response.json())
        .then(result => {
            let data = result
            data.forEach(data => {
                quote.innerHTML = `"${data.content}"`;
                author.innerHTML = `- ${data.author}`;
            }

            )
        }
        )
        .catch(error => console.log(error))
}

            //FRASES FAMOSAS RANDOM//
// const quote = document.getElementById("quote");
// const author = document.getElementById("author");
// const btn = document.getElementById("btnQuote");

// btn.addEventListener("click", getQuote);

// function getQuote() {
//   fetch("https://api.quotable.io/random")
//     .then((response) => response.json())
//     .then((data) => {
//       quote.innerHTML = `"${data.content}"`;
//       author.innerHTML = `- ${data.author}`;
//     });
// }
