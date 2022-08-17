
class Destination {
    constructor(city, price, img, id, id1) {
        this.city = city;
        this.price = price;
        this.img = img;
        this.id = id;
        this.id1 = id1;

    }


}

const flight1 = new Destination("Rome", 500, "./img/ROMA.jpg", 1, 1)
const flight2 = new Destination("London", 550, "./img/london.jpg", 2, 2)
const flight3 = new Destination("Paris", 400, "./img/paris.jpg", 3, 3)
const flight4 = new Destination("Amsterdam", 470, "./img/amsterdam.jpg", 4, 4)
const flight5 = new Destination("Brussels", 560, "./img/bruselas.jpg", 5, 5)
const flight6 = new Destination("Viena", 580, "./img/viena.jpg", 6, 6)
const flight7 = new Destination("Stockholm", 520, "./img/estocolmo.jpg", 7, 7)
const flight8 = new Destination("Prague", 345, "./img/praga.jpg", 8, 8)
const flight9 = new Destination("Warsaw", 330, "./img/varsovia.jpg", 9, 9)
const flight10 = new Destination("Lisbon", 510, "./img/lisboa.jpg", 10, 10)
const flight11 = new Destination("Oslo", 600, "./img/oslo.jpg", 11, 11)
const flight12 = new Destination("Madrid", 425, "./img/madrid.jpg", 12, 12)
const flight13 = new Destination("Tirana", 355, "./img/tirana.jpg", 13, 13)
const flight14 = new Destination("Sofia", 470, "./img/sofia.jpg", 14, 14)
const flight15 = new Destination("Dublin", 500, "./img/dublin.jpg", 15, 15)
const flight16 = new Destination("Turin", 420, "./img/turin.jpg", 16, 16)
const flight17 = new Destination("Hamburg", 550, "./img/hamburgo.jpg", 17, 17)
const flight18 = new Destination("Mallorca", 610, "./img/Mallorca.jpg", 18, 18)
const flight19 = new Destination("Marseille", 650, "./img/marsella.jpg", 19, 19)
const flight20 = new Destination("Athens", 575, "./img/atenas-8.jpg", 20, 20)
const flight21 = new Destination("Venice", 520, "./img/venecia1.jpg", 21, 21)
const flight22 = new Destination("Barcelona", 480, "./img/barcelona.jpg", 22, 22)
const flight23 = new Destination("Lyon", 540, "./img/lyon.jpeg", 23, 23)




let flightList = [flight1, flight2, flight3, flight4, flight5, flight6, flight7, flight8, flight9, flight10, flight11, flight12,
    flight13, flight14, flight15, flight16, flight17, flight18, flight19, flight20, flight21, flight22, flight23,];

console.log(flightList)

let flightOffer = [flight9, flight13, flight8];
console.log(flightOffer)

