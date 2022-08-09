class pack {
    constructor(ciudad, ciudad1, ciudad2, ciudad3,precio, img1, img2, img3, id) {
        this.ciudad = ciudad
        this.ciudad1 = ciudad1;
        this.ciudad2 = ciudad2;
        this.ciudad3 = ciudad3;
        this.precio = precio;
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;
        this.id = id;

    }
    

}
const destino24 = new pack("Pack Spain", "Madrid", "Barcelona", "Mallorca", 1150, "../img/madrid.jpg", "../img/barcelona.jpg","../img/Mallorca.jpg",1)
const destino25 = new pack("Pack France", "Paris", "Marsella", "Lyon", 1230, "./img/paris.jpg", "../img/marsella.jpg","../img/lyon.jpeg",2)
const destino26 = new pack("Pack Italy","Venecia", "Turin", "Roma", 1300, "../img/venecia1.jpg", "../img/turin.jpg","./img/ROMA.jpg",3)

let listaPack = [destino24, destino25, destino26]
console.log(listaPack)