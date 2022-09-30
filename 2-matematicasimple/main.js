/*En este ejercicio deberás crear:

Una función que se llame triplicador que tome un número como input (osea, como Parámetro) y retorne el triple de ese valor.
Una función multiplicador que tome dos números como Parámetros y devuelva el producto de los dos.
Una función division que tome dos números como Parámetros y devuelva el resultado de dividir el primero por el segundo.
Una función resto que tome dos números como Parámetros y devuelva el resultado del módulo del primero sobre el segundo.
Por último, calculá el valor de triplicar 5, luego multiplicar eso por 12, dividir por 12 y encontrar el resto de dividir eso en 3.*/
let resultado=0
function triplicador (n){
return n*3
}
function multiplicador (n1,n2){
    return n1*n2
}
function division(n3,n4){
    return n3/n4
}
function resto (n5,n6){
    return resto=(n5%n6)
}
 console.log(triplicador(5))
console.log (multiplicador(triplicador(5),12))
console.log(division(multiplicador(triplicador(5),12),12))
console.log (resto(division(multiplicador(triplicador(5),12),12)),3)