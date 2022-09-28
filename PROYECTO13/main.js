let n = 50
let nroAleatorio
let suma = 0
let intentos = 0//unico contador
let eleccion = "si"

while (eleccion == "si") {
    n = parseInt(prompt("Ingrese número entre 50 y 100"))
//poner while para 49 y 101
    nroAleatorio = parseInt(Math.random() * 50) + 50
    alert("El número generado por el programa es " + nroAleatorio + ".")
    suma = nroAleatorio + n
    alert("El valor de la suma es: " + suma + ".")
    eleccion = prompt("Desea repetir la jugada?")
    intentos++
}
if (intentos==1){
    alert ("Su intento fue " +intentos+".")
}else{
alert("Sus intentos fueron " + intentos+".")
}











