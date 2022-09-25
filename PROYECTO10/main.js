alert("Programa de Gestion Gerencial de Ventas"); 
let valorCompra = 0;
let continuar = "si";
while (continuar == "si") {
  valorCompra = parseInt(prompt("Ingrese el valor de compra"));
  if (valorCompra > 0) {
    if (valorCompra >= 350000) {
      alert("La compra excede los limites de semanales");
    } else if (valorCompra >= 70000) {
      alert("La compra excede los limites diarios");
    }else
    {
      alert("La compra es adecuada")
    }
  } else {
    alert("Ingreso invalido, el valor de compra debe ser positivo y mayor que Cero");
  }
  continuar=prompt("Desea continuar con otra compra?<si,no>:")
}
alert("Fin del programa");
