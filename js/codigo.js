
let cart = []
let containerFlight = document.getElementById('containerFlight')
let containerCart = document.getElementById("containerCart")
let quantityCart = document.getElementById("quantityCart")
let total = document.getElementById("totalPrice")
let button = document.getElementById("button2")
let containerOffer = document.getElementById("containerOffer")


function showFlights(flightList) {
    containerFlight.innerHTML = ""
    flightList.forEach(item => {
        let div = document.createElement("div")
        div.className = "destination col-12 col-md-4 mt-3"
        div.innerHTML = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${item.img}">
        <div class="card-body">
        <h4 class="card-title">${item.city} </h4>
        <p class= "price">$ ${item.price}</p>
        <button id= "${item.id}" class="btn"><span class="material-icons">
        flight_takeoff
        </span></button>
        </div>
        </div>`
        containerFlight.appendChild(div)

        let button = document.getElementById(`${item.id}`)
        button.addEventListener("click", () => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your flight have been added to the Shopping cart',
                showConfirmButton: false,
                timer: 1500,
            })
            addToCart(item)
        })
        showCart()




    })
}

showFlights(flightList)
showOffers()
function showOffers() {
    flightOffer.forEach(item => {
        let div = document.createElement("div")
        div.className = "offers col-12 col-md-4 mt-3"
        div.innerHTML = `<div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="${item.img}">
                            <div class="card-body">
                                <h4 class="card-title">${item.city} </h4>
                                <p class= "price">$ ${item.price}</p>
                                <button id= "${item.id}" class="btn" id="buttonProduct"><span class="material-icons">
                                flight_takeoff
                                </span></button>
                            </div>
                        </div>`

        containerOffer.appendChild(div)
        let btn = document.getElementById(`${item.id}`)
        btn.addEventListener("click", () => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your flight have been added to the Shopping cart',
                showConfirmButton: false,
                timer: 1500,
            })
            addToCart(item)
        })

    })
}


function addToCart(item) {

    let flight = flightList.find(flight => flight.id === item.id)
    cart.push(flight)
    localStorage.setItem("flight", JSON.stringify(cart))


    actualizeCart()

}


button.addEventListener("click", showCart)
function showCart() {
    containerCart.innerHTML = ""

    if (cart.length === 0) {
        let div = document.createElement("div")
        div.innerHTML = `<p id ="empty" >Shopping cart is empty</p>`
        containerCart.appendChild(div)
    }
    else {

        cart.forEach(item => {
            let div = document.createElement("div")
            div.className = "containerCart d-flex"
            div.innerHTML = `<p class="col-6 align-items-end">${item.city}</p>
                        <p class="col-6 align-items-end">Price: $${item.price} 
                        <button class="booking" id="btn${item.id1}"><span class="material-icons">
                        flight_land
                        </span></button></p>
                        <button id="button${item.id}" class="remove-btn"><span class="material-icons" >
                        delete 
                        </span></button>
                        `

            containerCart.appendChild(div)
            actualizeCart()



            const btnDelete = document.getElementById(`button${item.id}`)
            btnDelete.addEventListener("click", () => {
                btnDelete.parentElement.remove()
                cart.forEach(item => item.id == `button${item.id}`)
                let index = cart.indexOf(item)
                cart.splice(index, 1)
                actualizeCart()
                showCart()



            })
            let btnpay = document.getElementById(`btn${item.id1}`)
            console.log(btnpay)
            btnpay.addEventListener("click", () => {
                btnpay.parentElement.remove()
                cart.forEach(item => item.id1 == `btn${item.id1}`)
                let index = cart.indexOf(item)
                cart.splice(index, 1)
                actualizeCart()
                showCart()


                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Thank you for trusting us!  Enjoy your travel!!',
                    showConfirmButton: false,
                    timer: 2000,

                })

            })

        })


    }
}



function actualizeCart() {
    quantityCart.innerText = cart.length
    total.innerText = cart.reduce((acc, el) => acc + el.price, 0)
}

function flightFilter(e) {
    let flightFiltered = flightList.filter(flight => (flight.city).toLowerCase().includes(e.target.value))
    showFlights(flightFiltered)
    console.log(e.target.value)
}
window.addEventListener("keyup", flightFilter)


let packContainer = document.getElementById("packContainer")
function showPack(PackList) {
    packContainer.innerHTML = ""
    PackList.forEach(item => {
        let div = document.createElement("div")
        div.className = "modalPack"
        div.innerHTML = `<div class="backgroundPack">
                       
                             <div img id="background1" src="${item.img1}">
                                <h3> ${item.city1}</h3> </div>
                         
                           
                                 <div img id="background2" src="${item.img2}">
                                 <h3> ${item.city2}</h3></div>
                                 
                                 <div img id="background3" src="${item.img3}">
                                 <h3> ${item.city3}</h3></div>
                           
                     </div>
                        <div class="contentPack" >
                            <div class="titlePack">
                            <h1>${item.city}</h1>
                            </div>
                            <div class="blockPack">
                                <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ab ut perferendis inventore
                                    suscipit, atque temporibus totam voluptatibus doloribus praesentium</P>
                                <p class="pricePack">
                                <strong> Only ${item.price}</strong>
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
                title: 'Your flight have been added to the Shopping cart',
                showConfirmButton: false,
                timer: 1500,
            })
            addPack(item)
        })

    })
}
showPack(PackList)

function addPack(item) {

    let countryPack = PackList.find(flight => flight.id === item.id)
    cart.push(countryPack)
    localStorage.setItem("pack", JSON.stringify(cart))

    actualizeCart()


}


//FRASES SOBRE VIAJES DE MI ARCHIVO JSON//
// NECESITO BUSCARLE LA FORMA DE QUE ME LAS IMPRIMA DE MANERA ALEATORIA AL HACER CLICK//

// const quote = document.getElementById("quote");
// const author = document.getElementById("author");
// const btn = document.getElementById("btnQuote");

// btn.addEventListener("click", getQuote);

// function getQuote() {
//     fetch("./quotes.json")
//         .then(response => response.json())
//         .then(result => {
//             let data = result
//             data.forEach(data => {
//                 quote.innerHTML = `"${data.content}"`;
//                 author.innerHTML = `- ${data.author}`;
//             }

//             )
//         }
//         )
//         .catch(error => console.log(error))
// }

// FRASES FAMOSAS RANDOM
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btnQuote");

btn.addEventListener("click", getQuote);

function getQuote() {
    fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((data) => {
            quote.innerHTML = `"${data.content}"`;
            author.innerHTML = `- ${data.author}`;

        });

}
