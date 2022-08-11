class pack {
    constructor(city, city1, city2, city3,price, img1, img2, img3, id) {
        this.city = city
        this.city1 = city1;
        this.city2 = city2;
        this.city3 = city3
        this.price = price;
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;
        this.id = id;

    }
    

}
const flight24 = new pack("Pack Spain", "Madrid", "Barcelona", "Mallorca", 1150, "../img/madrid.jpg", "../img/barcelona.jpg","../img/Mallorca.jpg",1)
const flight25 = new pack("Pack France", "Paris", "Marseille", "Lyon", 1230, "../img/paris.jpg", "./img/marsella.jpg","../img/lyon.jpeg",2)
const flight26 = new pack("Pack Italy","Venice", "Turin", "Rome", 1300, "../img/venecia1.jpg", "./img/turin.jpg","../img/ROMA.jpg",3)

let PackList = [flight24, flight25, flight26]
console.log(PackList)