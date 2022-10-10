/*2. Loop de impares con palabra
Debés crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra y haga un loop de 0 a 100, mostrando en la consola cada número del loop. 
Ahora, modificá el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.*/

LoopDeImparesConPalabra (6,"frente")
function LoopDeImparesConPalabra(nro, palabra){
    let n=0
    while (n<=100){
        console.log(n)
        n++
    let contador= nro+n// podria ser let contador+=nro(ver)
    if (contador %2==1){
        console.log(palabra)
    }
    }

}