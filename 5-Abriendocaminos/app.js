let edad = prompt("Ingrese su edad.")
if (edad < 0) {
    alert("Error, su edad no es valida.")
}
else {
    if (edad < 18) {
        alert("No puede pasar al bar.")
    }
    
    else if (edad < 21) {
        alert("Puede pasar al bar, pero no puede tomar alcohol.")
    }
    else {
        alert("Bienvenid@!")
        if (edad == 21) {
            alert("Felicitaciones por haber llegado a la mayoria de edad.")
        }
        alert("Puede pasar al bar y tomar alcohol.")
    }
    if (edad % 2 != 0) {
        alert("Sabias que tu edad es impar?")
    }
}