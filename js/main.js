
/*                          ///CALCULAR PRECIOS CON DESCUENTO E IVA//

const suma = (a , b , c) => a + b + c
const resta = (a , b) => a - b 

const iva = c => c * 0.25
let precioAereo = 350
let descuento = 49.99
let premium = 99.99

let precioFinal = resta (suma(precioAereo , clasePremium , iva (precioAereo)) , descuento)
console.log(precioFinal)
*/

/*
const nombre = prompt("Ingrese nombre y apellido")
const suma = (a , b , c) => a + b + c
const resta = (a , b) => a - b 
const iva = x => x * 0.25
let precioAereo = 0
const descuento = 49.99
const clasePremium = 99.99
const cero = 0
let precioFinal

alert ("Hola  " + nombre + ",  Bienvenido a Gate05")

let destino = prompt("Ingrese el destino al que desea viajar (Roma, Londres, Paris)").toLowerCase()

while (destino != "roma" && destino != "londres" && destino != "paris" ){
    alert("El destino no existe")
    destino = prompt("Ingrese el destino al que desea viajar (Roma, Londres, Paris)").toLowerCase()
}
if (destino == "roma"){
    precioAereo = 350
}
else if(destino == "londres"){
    precioAereo = 375
}
else{
    precioAereo = 400
}

let clase = prompt("desea viajar en clase premium? (SI = premium / NO = economic)").toLowerCase()

while(clase != "si" && clase != "no"){
    alert("respuesta incorrecta")
    clase = prompt("desea viajar en clase premium? (SI = premium / NO = economic)").toLowerCase()
}

if (clase == "si"){
    precioFinal = resta (suma(precioAereo , clasePremium , iva (precioAereo)) , descuento)
    alert("el precio final es de  " + precioFinal)
}

else{
    precioFinal = resta (suma(precioAereo, iva (precioAereo), cero) , descuento)
    alert("el precio final es de  " + precioFinal)
}
*/
                //AGREGAR DESTINOS Y PUSHEARLOS SI NO ESTAN EN LA LISTA//

// let destino = ["roma", "londres", "paris", "amsterdam", "bruselas", "viena", "estocolmo", "praga", "varsovia", "lisboa", "oslo"]

// console.log(destino);

// let destinoNuevo = prompt("elija un destino europeo y les buscaremos las mejores ofertas")
// if (destino.includes (destinoNuevo)){
//     alert("El destino ya esta se encuentra en la lista")
//     destinoNuevo = prompt("elija un destino europeo y les buscaremos las mejores ofertas")
// }

// else (destino.indexOf (destinoNuevo) == -1) ; {
//     destino.push (destinoNuevo);
//     console.log (destino);

// }

                        //ELIMINAR DESTINOS//

// let destino = ["roma", "londres", "paris", "amsterdam", "bruselas", "viena", "estocolmo", "praga", "varsovia", "lisboa", "oslo"]

// const eliminar = prompt ("que ciudad desea eliminar de la lista?") 
// let index = destino.indexOf(eliminar)
// if (index != -1) {
//     destino.splice (index, 1)
  
// }
// console.log(destino)

                            //arrays + objetos (for...of)

class destinos {
    constructor(ciudad, precio){
        this.ciudad = ciudad;
        this.precio = precio;

    }
  
}
let listaDestinos = [
    {ciudad: "roma", precio: 500 },
    {ciudad: "londres", precio: 550 },
    {ciudad: "paris", precio: 400 },
    {ciudad: "amsterdam", precio: 470 },
    {ciudad: "bruselas", precio: 560 },
    {ciudad: "viena", precio: 580 },
    {ciudad: "estocolmo", precio: 520 },
    {ciudad: "praga", precio: 480 },
    {ciudad: "varsovia", precio: 390 },
    {ciudad: "lisboa", precio: 510 },
    {ciudad: "oslo", precio: 600 },

];
for (let destinos of listaDestinos)
{
    console.log(`su destino es ${destinos.ciudad} y su precio es de ${destinos.precio}`);
}
































