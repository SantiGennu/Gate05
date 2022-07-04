const suma = (a , b , c) => a + b + c
const resta = (a , b) => a - b 
console.log( suma (350, 99.99, 350))
const iva = c => c * 0.25
let precioAereo = 350
let descuento = 49.99
let premium = 99.99

let precioFinal = resta (suma(precioAereo , premium , iva (precioAereo)) , descuento)
console.log(precioFinal)
