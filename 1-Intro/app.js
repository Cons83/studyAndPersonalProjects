let x=3
let y=8
if (x>=10){
alert("Se cumple.")
} else {
alert("No se cumple.")
}
if (y==="b"){
alert("Se cumple")
}else{
alert("No se cumple.")   
}

if (y==="b" || x >= 10){
alert("Se cumple.")
} else {
alert("No se cumple.")
}


if (!(x == "3" || x === y) && !(y !== 8 && x <= y)){
    alert("Se cumple.")
    } else {
    alert("No se cumple.")
    }

let str = ""//false (por vacio)
let msj = "jaja!"//true
let esGracioso = "false"//true
if(!((str || msj) && esGracioso)){
alert("Se cumple.")    
}else{
alert("No se cumple.")    
}
 