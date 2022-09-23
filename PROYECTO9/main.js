let compreMouse = "no"; 
while (compreMouse == "no") {
  compreMouse = prompt("Maria, ya compraste el Mouse?");
  if (compreMouse == "no") {
    alert("¡Entonces anda inmediatamente a comprar el mouse!");
  } else {
    alert("Ahora vamos a trabajar mas comodamente :)");
    alert("El programa solo finaliza si compraste el mouse :)");
  let precioMouse = parseInt(prompt("Cuanto te costo el mouse?"));
  if (precioMouse >= 1500) {
    alert("Debe ser un buen Mouse");
  } else if (precioMouse <= 1000) {
    alert("mmmm... espero que dure mucho");
  }
  }
}
alert("¡CHAU!")


