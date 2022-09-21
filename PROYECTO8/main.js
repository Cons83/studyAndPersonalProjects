let ultimoNro = prompt("Ingrese el último nro de su Dni")
let sexo = prompt("Ingrese sexo")
if (sexo == "hombre") {
    if (ultimoNro == 5) {
        alert(" Debe vacunarse el día Jueves 15")
    }
    else if (ultimoNro == 0) {
        alert("Debe vacunarse el día lunes 19")

    }
}else {
    if (ultimoNro==5){
        alert("Dabe vacunarse el dia viernes 16")
    }
    else if (ultimoNro ==0){
        alert ("Debe vacunarse el dia martes 20")
    }
}

