let nro = 1
let cadenaDenumeros=""
console.log(FizzBuzz2("feliz","primavera"))
function FizzBuzz2 (palabra1,palabra2){
    while (nro <= 100) {
        
        if (nro % 3 == 0) {
            console.log(palabra1)
        }
        if (nro % 5 == 0) {
            console.log(palabra2)
        }
        if (nro % 3 == 0 && nro % 5 == 0) {
            console.log(palabra1+palabra2)
        }
        cadenaDenumeros+=nro
        if (nro <=99){
            cadenaDenumeros+=","
        }

        
      // x cada loop se mete a la cadena nr//x cada nro una ,  
        nro++
    }
    return cadenaDenumeros 
}

