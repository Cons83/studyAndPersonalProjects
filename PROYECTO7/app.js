let sexo = prompt("Indique si es hombre o mujer")
if (sexo == "mujer") {
    let edadMujer = parseInt(prompt("Ingrese edad"))

    if (edadMujer >= 60) { // sin parentesis
        alert("Ud se puede jubilar")// esto es reemplazado por ? "Ud se puede jubilar"
    } else { // es reemplazado por : "Ud no se pueda jubilar";
        alert("Ud no se puede jubilar")
    }
}

else {
    let edadHombre = parseInt(prompt("Ingrese edad"))

    if (edadHombre >= 65) {
        alert("Ud se puede jubilar")
    }
    else {
        alert("Ud no puede jubilarse")
    }
}

// en solucion parseint y ===