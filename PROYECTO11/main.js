let capacidadCajon = 10
let fruta=""
let cantidadFrutas = 0
while(cantidadFrutas<capacidadCajon)
{
  fruta = prompt("Ingrese fruta: ")
  while(!(fruta))
  {
    fruta = prompt("Ingrese fruta: ")
  }
  alert("Usted ingreso al cajon un/a "+fruta)
  cantidadFrutas++;
  if(cantidadFrutas<2)
  {
  alert("Al momento ha ingresado "+cantidadFrutas+ " fruta")
  }
  else
  {
    alert("Al momento ha ingresado "+cantidadFrutas+ " frutas")
  }
  if(cantidadFrutas==9)
  {
    alert("Cuidado! Le queda solo una fruta por ingresar")
  }
}
alert("Capacidad completa")
alert("Fin del programa")
