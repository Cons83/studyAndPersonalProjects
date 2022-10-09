/*•	1. Loop de pares
Debés crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100,
 mostrando en la consola cada número del loop. 
En caso de que el número de la iteración, sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”.
•	2. Loop de impares con palabra
Debés crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra y haga un loop de 0 a 100, mostrando en la consola cada número del loop. 
Ahora, modificá el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.
•	3. Sumatoria
	Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese 

mismo.

Ejemplo: 
•	sumattion(3) debe retornar 6 porque hace (1 +2 +3)
•	sumattion(8) debe retornar 36


*/
LoopDePares(7)
function LoopDePares (nro){
   let n=0 
   while (n<=100){
    console.log(n)
    n++
    let suma= n+nro
    if (suma%2==0 ){
        console.log (" El numero "+ suma + " es par")
    }
   }
}