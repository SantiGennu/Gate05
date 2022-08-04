
class Destinos {
    constructor(ciudad, precio, img, id) {
        this.ciudad = ciudad;
        this.precio = precio;
        this.img = img;
        this.id = id;

    }
    

}

const destino1 = new Destinos("Roma", 500, "./img/ROMA.jpg", 1)
const destino2 = new Destinos("Londres", 550, "./img/london.jpg", 2)
const destino3 = new Destinos("ParÍs", 400, "./img/paris.jpg", 3)
const destino4 = new Destinos("Amsterdam", 470, "../img/amsterdam.jpg", 4)
const destino5 = new Destinos("Bruselas", 560, "../img/bruselas.jpg", 5)
const destino6 = new Destinos("Viena", 580, "../img/viena.jpg", 6)
const destino7 = new Destinos("Estocolmo", 520,"../img/estocolmo.jpg", 7)
const destino8 = new Destinos("Praga", 345, "../img/praga.jpg", 8)
const destino9 = new Destinos("Varsovia", 330, "../img/varsovia.jpg", 9)
const destino10 = new Destinos("Lisboa", 510, "../img/lisboa.jpg", 10)
const destino11 = new Destinos("Oslo", 600, "../img/oslo.jpg", 11)
const destino12 = new Destinos("Madrid", 425, "../img/madrid.jpg", 12)
const destino13 = new Destinos("Tirana", 355, "../img/tirana.jpg", 13)
const destino14 = new Destinos("SofÍa", 470, "../img/sofia.jpg", 14)
const destino15 = new Destinos("Dublin", 500, "../img/dublin.jpg", 15)
const destino16 = new Destinos("Turin", 420, "../img/turin.jpg", 16)
const destino17 = new Destinos("Hamburgo", 550, "../img/hamburgo.jpg", 17)
const destino18 = new Destinos("Mallorca", 610, "../img/Mallorca.jpg", 17)
const destino19 = new Destinos("Marsella", 650, "../img/marsella.jpg", 19)
const destino20 = new Destinos("Atenas", 575, "../img/atenas-8.jpg", 20)
const destino21 = new Destinos("Venecia", 520, "../img/venecia1.jpg", 21)
const destino22 = new Destinos("Barcelona", 480, "../img/barcelona.jpg", 22)
const destino23 = new Destinos("Lyon", 540, "../img/lyon.jpeg", 23)
const destino24 = new Destinos("PackSpain", 1150, "../img/lyon.jpeg",24)
const destino25 = new Destinos("packFrance", 1239, "../img/lyon.jpeg",25)
const destino26 = new Destinos("packItaly", 1300, "../img/lyon.jpeg",26)





let listaDestinos = [destino1, destino2, destino3, destino4, destino5, destino6, destino7,
    destino8, destino9, destino10, destino11,destino12,destino13,destino14,destino15, 
    destino16,destino17,destino18,destino19,destino20, destino21, destino22, destino23];

console.log(listaDestinos)

let ofertaDestinos= [destino9, destino13, destino8];
console.log(ofertaDestinos)

let listaPack =[ destino24, destino25, destino26]
console.log(listaPack)
