let input =parseInt ( document.getElementById('numeroSecreto').value)// valor del numero secreto
let numeroIngresado = prompt("¿Cuál es el número secreto?")
if (numeroIngresado == input) {
    alert("Clave correcta.")
}
else {
    alert("Clave incorrecta.")
    if (numeroIngresado > input) {
        alert("El número es mayor al número secreto")
    }
    else {
        
        alert("El número es menor al número secreto.")
    }
}