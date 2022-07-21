
class Destinos {
    constructor(ciudad, precio, img, id) {
        this.ciudad = ciudad;
        this.precio = precio;
        this.img = img;
        this.id = id;

    }

}
const destino1 = new Destinos("roma", 500, "./img/pexels-flo-dahm-699466.png", 1)
const destino2 = new Destinos("londres", 550, "./img/pexels-flo-dahm-699466.png", 2)
const destino3 = new Destinos("paris", 400, "./img/pexels-flo-dahm-699466.png", 3)
const destino4 = new Destinos("amsterdam", 470, "../img/pexels-flo-dahm-699466.png", 4)
const destino5 = new Destinos("bruselas", 560, "../img/pexels-flo-dahm-699466.png", 5)
const destino6 = new Destinos("viena", 580, "../img/pexels-flo-dahm-699466.png", 6)
const destino7 = new Destinos("estocolmo", 520,"../img/pexels-flo-dahm-699466.png", 7)
const destino8 = new Destinos("praga", 480, "../img/pexels-flo-dahm-699466.png", 8)
const destino9 = new Destinos("varsovia", 390, "../img/pexels-flo-dahm-699466.png", 9)
const destino10 = new Destinos("lisboa", 510, "../img/pexels-flo-dahm-699466.png", 10)
const destino11 = new Destinos("oslo", 600, "../img/pexels-flo-dahm-699466.png", 11)
const destino12 = new Destinos("madrid", 425, "../img/pexels-flo-dahm-699466.png", 12)
const destino13 = new Destinos("tirana", 535, "../img/pexels-flo-dahm-699466.png", 13)
const destino14 = new Destinos("sofia", 470, "../img/pexels-flo-dahm-699466.png", 14)
const destino15 = new Destinos("dublin", 500, "../img/pexels-flo-dahm-699466.png", 15)
const destino16 = new Destinos("turin", 420, "../img/pexels-flo-dahm-699466.png", 16)
const destino17 = new Destinos("hamburgo", 550, "../img/pexels-flo-dahm-699466.png", 17)
const destino18 = new Destinos("verna", 610, "../img/pexels-flo-dahm-699466.png", 17)
const destino19 = new Destinos("marsella", 650, "../img/pexels-flo-dahm-699466.png", 19)
const destino20 = new Destinos("atenas", 575, "../img/pexels-flo-dahm-699466.png", 20)



let listaDestinos = [destino1, destino2, destino3, destino4, destino5, destino6, destino7,
    destino8, destino9, destino10, destino11,destino12,destino13,destino14,destino15,destino16,destino17,destino18,destino19,destino20];
// const ciudades = listaDestinos.map(destino => destino.ciudad)
console.log(listaDestinos)

// const descuento = 49.99
// const descuento2 = 99.99
// const descuento3 = 149.99
// const clasePremium = 99.99



// const compra = []
// const nombre = prompt("Ingrese nombre y apellido")
// alert("Hola  " + nombre + ",  Bienvenido a Gate05")


// bookingFlight()
// function bookingFlight() {
//     let ciudad = prompt("ingrese un destino europeo al que quiera visitar").toLocaleLowerCase()
//     while (!ciudades.includes(ciudad)) {
//         alert("no hay vuelos disponibles a ese destino")
//         ciudad = prompt("ingrese un destino europeo al que quiera visitar").toLowerCase()


//     }
//     const city = listaDestinos.find(destino => destino.ciudad == ciudad)
//     compra.push(city)

//     let pack = prompt("desea elegir otro destino y aprovechar los mejores descuentos? (SI / NO)").toLowerCase()
//     while (pack != "si" && pack != "no") {
//         alert("respuesta incorrecta")
//         pack = prompt("desea elegir otro destino y aprovechar los mejores descuentos? (SI / NO)").toLowerCase()
//     }


//     if (pack == "si") {
//         bookingFlight()
//     }
//     else {
//         let clase = prompt("desea viajar en clase premium? (SI = premium / NO = economic)").toLowerCase()

//         while (clase != "si" && clase != "no") {
//             alert("respuesta incorrecta")
//             clase = prompt("desea viajar en clase premium? (SI = premium / NO = economic)").toLowerCase()
//         }
//         if (clase == "si") {

//             const precioTotal = compra.reduce((acc, el) => acc + el.precio + clasePremium - descuento2, 0)
//             alert("el valor de tu vuelo es de " + Math.round(precioTotal))
//         }
//         else {


//             const precioTotal = compra.reduce((acc, el) => acc + el.precio - descuento, 0)
//             alert("el valor de tu vuelo es de " + Math.round(precioTotal))
//         }
//     }
    
// }

// function eliminarVuelo(eliminar) {
//     const index = compra.map(destino => destino.ciudad).indexOf(eliminar)
//     compra.splice(index, 1)
// }
// consultaEliminar()
// function consultaEliminar() {
//     if (compra.length > 0) {
//         let ciudadCarrito = ""
//         for (const viaje of compra) {
//             ciudadCarrito += viaje.ciudad + ""
//         }
//         let consulta = prompt("el carrito actualmente tiene " + ciudadCarrito + "desea eliminar uno de estos? SI/NO")

//         if (consulta == "si") {
//             eliminar = prompt("que ciudad desea eliminar?")
//             eliminarVuelo(eliminar)
//             const precioTotal = compra.reduce((acc, el) => acc + el.precio + clasePremium - descuento, 0)
//             alert("el precio es de" + precioTotal)
//         }

//         else {
//             const precioTotal = compra.reduce((acc, el) => acc + el.precio + clasePremium - descuento2, 0)
//         }
        
//     }

//     else {
//         alert("el carrito no tiene vuelos")
//     }



// }
// console.log(compra)
let carritoDeCompras = []
