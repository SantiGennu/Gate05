class Destinos {
    constructor(ciudad, precio) {
        this.ciudad = ciudad;
        this.precio = precio;

    }

}
const destino1 = new Destinos("roma", 500)
const destino2 = new Destinos("londres", 550)
const destino3 = new Destinos("paris", 400)
const destino4 = new Destinos("amsterdam", 470)
const destino5 = new Destinos("bruselas", 560)
const destino6 = new Destinos("viena", 580)
const destino7 = new Destinos("estocolmo", 520)
const destino8 = new Destinos("praga", 480)
const destino9 = new Destinos("varsovia", 390)
const destino10 = new Destinos("lisboa", 510)
const destino11 = new Destinos("oslo", 600)



let listaDestinos = [destino1 , destino2, destino3, destino4, destino5, destino6, destino7, 
    destino8, destino9, destino10, destino11 ];

const descuento = 49.99
const descuento2 = 99.99
const descuento3 = 149.99
const clasePremium = 99.99



const compra = []
const nombre = prompt("Ingrese nombre y apellido")
alert("Hola  " + nombre + ",  Bienvenido a Gate05")

let ciudad = prompt("ingrese un destino europeo al que quiera visitar").toLocaleLowerCase()
let find = listaDestinos.find(destino => destino.ciudad == ciudad)
console.log(find)

while( ciudad != "roma" && ciudad != "londres" && ciudad != "paris" 
&& ciudad != "amsterdam" && ciudad != "bruselas"
&& ciudad != "estocolmo" && ciudad != "viena" && ciudad != "praga"
&& ciudad != "varsovia" && ciudad != "lisboa" && ciudad != "oslo"){
alert("no hay vuelos disponibles a ese destino")
    ciudad = prompt("ingrese un destino europeo al que quiera visitar").toLowerCase()}
if (ciudad == "roma") {
    compra.push(destino1)
    alert("Genial! usted esta a un pasito de subirse al avion")
}
else if (ciudad == "londres") {
    compra.push(destino2)
    alert("Genial! usted esta a un pasito de subirse al avion")
}
else if (ciudad == "paris") {
    compra.push(destino3)
    alert("genial! usted esta a un pasito de subirse al avion")
}
else if (ciudad == "amsterdam") {
    compra.push(destino4)
    alert("genial! usted esta a un pasito de subirse al avion")
}
else if (ciudad == "bruselas") {
    compra.push(destino5)
    alert("genial! usted esta a un pasito de subirse al avion")
}
else if (ciudad == "viena") {
    compra.push(destino6)
    alert("Genial! usted esta a un pasito de subirse al avion")
}
else if (ciudad == "estocolmo") {
    compra.push(destino7)
    alert("Genial! usted esta a un pasito de subirse al avion")
}
else if (ciudad == "praga") {
    compra.push(destino8)
    alert("Genial! usted esta a un pasito de subirse al avion")
}
else if (ciudad == "varsovia") {
    compra.push(destino9)
    alert("genial! usted esta a un pasito de subirse al avion")
}
else if (ciudad == "lisboa") {
    compra.push(destino10)
    alert("genial! usted esta a un pasito de subirse al avion")
}
else if (ciudad == "oslo") {
    compra.push(destino11)
    alert("Genial! usted esta a un pasito de subirse al avion")
} else {
    alert("no hay vuelos disponibles a ese destino")
    ciudad = prompt("ingrese un destino europeo al que quiera visitar").toLowerCase()
}
let pack = prompt("desea elegir otro destino y aprovechar los mejores descuentos? (SI / NO)").toLowerCase()
while (pack != "si" && pack != "no") {
    alert("respuesta incorrecta")
    pack = prompt("desea elegir otro destino y aprovechar los mejores descuentos? (SI / NO)").toLowerCase()
}

if (pack == "si") {
    ciudad = prompt("ingrese otro destino europeo al que quiera visitar").toLowerCase()
    
    while( ciudad != "roma" && ciudad != "londres" && ciudad != "paris" 
    && ciudad != "amsterdam" && ciudad != "bruselas"
    && ciudad != "estocolmo" && ciudad != "viena" && ciudad != "praga"
    && ciudad != "varsovia" && ciudad != "lisboa" && ciudad != "oslo"){
    alert("no hay vuelos disponibles a ese destino")
        
    ciudad = prompt("ingrese un destino europeo al que quiera visitar").toLowerCase()}
    if (ciudad == "roma") {
        compra.push(destino1)
        alert("Genial! usted esta a un pasito de subirse al avion")
    }
    else if (ciudad == "londres") {
        compra.push(destino2)
        alert("Genial! usted esta a un pasito de subirse al avion")
    }
    else if (ciudad == "paris") {
        compra.push(destino3)
        alert("genial! usted esta a un pasito de subirse al avion")
    }
    else if (ciudad == "amsterdam") {
        compra.push(destino4)
        alert("genial! usted esta a un pasito de subirse al avion")
    }
    else if (ciudad == "bruselas") {
        compra.push(destino5)
        alert("genial! usted esta a un pasito de subirse al avion")
    }
    else if (ciudad == "viena") {
        compra.push(destino6)
        alert("Genial! usted esta a un pasito de subirse al avion")
    }
    else if (ciudad == "estocolmo") {
        compra.push(destino7)
        alert("Genial! usted esta a un pasito de subirse al avion")
    }
    else if (ciudad == "praga") {
        compra.push(destino8)
        alert("Genial! usted esta a un pasito de subirse al avion")
    }
    else if (ciudad == "varsovia") {
        compra.push(destino9)
        alert("genial! usted esta a un pasito de subirse al avion")
    }
    else if (ciudad == "lisboa") {
        compra.push(destino10)
        alert("genial! usted esta a un pasito de subirse al avion")
    }
    else if (ciudad == "oslo") {
        compra.push(destino11)
        alert("Genial! usted esta a un pasito de subirse al avion")
    } else {
        alert("este destino no existe")
        ciudad = prompt("ingrese otro destino europeo al que quiera visitar").toLowerCase()
    }

    let clase = prompt("desea viajar en clase premium? (SI = premium / NO = economic)").toLowerCase()
    while (clase != "si" && clase != "no") {
        alert("respuesta incorrecta")
        clase = prompt("desea viajar en clase premium? (SI = premium / NO = economic)").toLowerCase()
    }
    if (clase == "si") {
       
        const precioTotal = compra.reduce((acc, el) => acc + el.precio + clasePremium - descuento, 0)
        alert("el valor de tu vuelo es de " + Math.round(precioTotal))
    } else {
       
        const precioTotal = compra.reduce((acc, el) => acc + el.precio - descuento, 0)
        alert("el valor de tu vuelo es de " + Math.round(precioTotal))
    }
} else {

    let clase = prompt("desea viajar en clase premium? (SI = premium / NO = economic)").toLowerCase()
    while (clase != "si" && clase != "no") {
        alert("respuesta incorrecta")
        clase = prompt("desea viajar en clase premium? (SI = premium / NO = economic)").toLowerCase()
    }
    if (clase == "si") {
       
        const precioTotal = compra.reduce((acc, el) => acc + el.precio + clasePremium - descuento2, 0)
        alert("el valor de tu vuelo es de " + Math.round(precioTotal))
    }
    else {

      
        const precioTotal = compra.reduce((acc, el) => acc + el.precio - descuento, 0)
        alert("el valor de tu vuelo es de " + Math.round(precioTotal))
    }
}


console.log(compra)
