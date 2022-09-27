let numeroAleatorio=0
let manoPrograma=""
let manoUsuario=""
let eleccion="si"

alert ("Bienvenido a piedra papel o tijera")
while (eleccion=="si"){
    numeroAleatorio= Math.random()*3
    if (numeroAleatorio<1){
        manoPrograma="Piedra"
    }
    else if (numeroAleatorio<2){
        manoPrograma= "Papel"}
     else if (numeroAleatorio<3) {
        manoPrograma="Tijera" 
     }
    

manoUsuario =prompt ("Ingrese piedra, papel o tijera")
alert ("El programa respondió:"+ manoPrograma+ "Usted eligió:"+ manoUsuario)
if (manoUsuario===manoPrograma){
    alert ("EMPATE")}
    else if (manoUsuario=="Piedra"&& manoPrograma=="Tijera"||manoUsuario=="Papel"&&manoPrograma==Piedra|| manoUsuario=="Tijera"&&manoPrograma=="Papel"){
        alert ("GANASTE")
    }else{
        alert ("PERDISTE")
    }
    eleccion= prompt ("quiere volver a jugar?")
}
alert ("Gracias por participar, amig@")

//errores en no uso de variables antes del prompt. en math. random el * en vez del +, el else if se repite dos veces.

