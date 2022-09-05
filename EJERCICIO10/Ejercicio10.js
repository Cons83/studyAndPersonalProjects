//El ejercicio evalua que hora del dia es  y se mostrara por consola lo siguiente:
//Es de noche, es de dia,esta amaneciendo, esta atardeciendo,es mediodia,es medianoche.
let hora=559
if (hora>=1301)
if (hora<=1559)
{
    console.log("Es la siesta")
}
if (hora>=1600)
if (hora<=2000)
{
    console.log("Esta atardeciendo")
}
if (hora>2000)
if (hora<=2359)
{
    console.log("Es de noche")
}
if (hora==0000){
    console.log("Es medianoche")
}
if (hora>=1)
if (hora<=559)
{
    console.log("Es de noche")
}
if (hora>=600)
if (hora<=700)
{
    console.log("Esta amaneciendo")
}
if (hora>700)
if (hora<1200)
{
    console.log("Es de dia")
}
if (hora>=1200)
if (hora<=1300)
{
    console.log("Es mediodia")
}