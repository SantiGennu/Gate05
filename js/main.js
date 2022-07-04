/* (calcular precio con descuentos e iva)
const suma = (a , b , c) => a + b + c
const resta = (a , b) => a - b 

const iva = c => c * 0.25
let precioAereo = 350
let descuento = 49.99
let premium = 99.99

let precioFinal = resta (suma(precioAereo , clasePremium , iva (precioAereo)) , descuento)
console.log(precioFinal)
*/

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





























