
let input

while( !(input = prompt('Escriba su nombre, por favor.')) ){
  alert("No recibimos la información.")
}

alert("¡Gracias! Su nombre es: " + input + ".")//El prompt que le pide el nombre al usuario correrá hasta que el usuario 
//ingrese algo en ese campo.

//Una vez recibido un input, tendrá un String con contenido. Por lo tanto, la negación lo convertirá en false y el programa saldrá del Loop.

//Recordá: Un String vacío siempre es falso. Por lo tanto, podemos convertirlo
// en verdadero al negarlo con el signo de exclamación (!)