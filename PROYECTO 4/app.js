let pagWeb1 = prompt("A que pagina quieres dirigirte?")
let clave = prompt("Cual es la clave secreta?")
if (clave != 7845) {
    alert("Clave incorrecta.")
}
else {
    if (pagWeb1 == "google") {
    window.location = "http://www.google.com"
    }
    if (pagWeb1 == "facebook") {
    window.location = "http://www.facebook.com"
    }
    if (pagWeb1=="instagram"){
        window.location="http://www.instagram.com"
    }
    
}









