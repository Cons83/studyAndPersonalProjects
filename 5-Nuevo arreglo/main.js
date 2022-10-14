/*Debés crear una función llamada nuevoArreglo que reciba un número como parámetro 
y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.
 Ejemplo:

nuevoArreglo(5) debe retornar [1,2,3,4,5],
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]*/





let ary = [];//inicias un nuevo array (arreglo)

let num = prompt('Escribe un numero');//pides un numero por le prompt
    while(!num || isNaN(num)){//haces un bucle para pedir un numero
        num = prompt('Escribe un numero');//y si no es un numero, te pide de nuevo el prompt
    }
   
        

for(let i = 1; i <= num; i++){//inicias un bucle for
    ary.push(i);//en cada iteracion del bucle haces un push de i (valor que cambia) al array
}
    
console.log(ary);//console los del array