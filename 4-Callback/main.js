/*•	4. Callback
Debes crear una función llamada callback que reciba como Parámetros un número y una función. Esta deberá retornar el resultado de esa función pasándole como argumento el número que llega por parámetro.

Teoría de callbacks: click aqui

Ejemplo:
•	callback(5, (num)=>{return num*10}) debe retornar 50
•	callback(25, (num)=>{return num/5}) debe retornar 5*/

function callback(num,func){
    num=num+1;
    return num/5;
    }
    
    function dividir(num){
    return num/5;
    }
    console.log(callback(25,dividir));

