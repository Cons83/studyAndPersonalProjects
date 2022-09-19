let volDisp = prompt("Ingrese volumen de audio de su dispositivo.")
if (volDisp < 0 || volDisp > 100) {
    alert("Valor de volumen invalido.")
}
else {

    if (volDisp > 0 && volDisp <= 30) {
        alert("Volumen bajo")
    }
    if (volDisp >= 31 && volDisp <70) {
        alert("Volumen medio")
    }
    if (volDisp == 70) {
        alert("Este volumen es el optimo para la reproduccion.")
    }
    if (volDisp > 70 && volDisp <= 89) {
        alert("Volumen alto")
    }
    if (volDisp >= 90 && volDisp <= 100) {
        alert("Cuidado! Puede dañar sus oidos!")
    }
    if (volDisp % 2 == 0) {
        alert("El volumen es par")
    } else {
        alert("El volumen es impar")
    }
}