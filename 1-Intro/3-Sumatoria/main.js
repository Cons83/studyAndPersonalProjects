/*•	3. Sumatoria
	Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese 

mismo.

Ejemplo: 
•	sumattion(3) debe retornar 6 porque hace (1 +2 +3)
•	sumattion(8) debe retornar 36/*
*/




function sumattion(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log (sumattion(8)) 
