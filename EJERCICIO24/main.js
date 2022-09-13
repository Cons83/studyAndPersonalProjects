let minutos = 5
let minutero = 1
let segundos = 60
let segundero = 1

while(minutero <= minutos){//loop madre/ se hace 5 veces
  while(segundero < segundos){//entonces/loop hijo/ se hace 60 (al finalizar vuelve a la madre)
    console.log(minutero + " minutos, " + segundero + " segundos.")
    segundero++// Esta es la condición de corte o medida de seguridad del loop anidado.
  }
  segundero = 1 // Reestablecemos el valor de la variable para que vuelva a ser true.
  minutero++// Esta es la condición de corte o medida de seguridad del loop madre.
}