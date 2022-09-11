//Valiéndonos del ejercicio 18 (acumulador)
//Realizar un programa que acumulo los números comprendidos entre 10 y 20. 

//El resultado final debe ser: 10+11+12+13+14+15+16+17+18+19+20 = 155
let nro=10
let acumulador=0// se inician en 0
while (nro<=20){
   acumulador=acumulador+nro //acumulador +nro se almacena en acumulador, en cada bucle cambia valor.
    nro++
    console.log(acumulador)

}
//bucle 1: 0+10=10 (ver captura)