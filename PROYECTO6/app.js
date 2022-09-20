let edad = prompt("Ingrese su edad")
let presión = prompt("Ingrese su presión")
if (edad < 18) {

    if (presión <= 73) {
        alert("presión diastólica")
    }
    if (presión >= 74 && presión <= 105) {
        alert("presión normal")
    }

    if (presión >= 106) {
        alert("presión sistólica")
    }
}
else {
    if (presión <= 77) {
        alert("presión diastólica")
    }
    if (presión >= 78 && presión <= 110) {
        alert("presión normal")
    }

    if (presión >= 111) { 
        alert("presión sistólica")
    }

    
}
if (edad > 0 && edad <= 100) {
    
    if (presión <= 50) {
        alert("ingreso a terapia por presión baja")
    }
    if (presión >= 150) {
        alert("ingreso a terapia por presión alta")
    }
    
}
if (edad > 50 && presión > 95) {
    alert("Ud debe tomarse la presión mas seguido")
}

