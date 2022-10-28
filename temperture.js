//celcius to farenheight scale:
function celToFaren (temperature)
{
    var farenTemp = (temperature * 9 / 5) + 32; //formula
    return farenTemp;
}
var inputTemp = 2;
var getTemp = celToFaren( inputTemp );
console.log( "Farenheight Temperature is:", getTemp );
//celcius to kelvin
function celToKel ( temperature )
{
    var kelvTemp = ( temperature + 273.15 );
    return kelvTemp;
}
var inputTemp = 98;
var getFtemp = celToKel( inputTemp );
console.log("Kelvin Tempereture Is:", getFtemp);
//Farenheight to celcius scale
function farenToCel ( temperature )
{
    var celTemp = (temperature - 32 )* 5 / 9;
    return celTemp;
}
var inputTemp = 98;
var getCtemp = farenToCel( inputTemp );
console.log( "Celcius Temperature is:", getCtemp );
//Farenheight to kelvin Scale
function farenToKel ( temperature )
{
    var kelvTemp =  (temperature - 32)  * 5 / 9 + 273.15 ;
    return kelvTemp;
}
var inputTemp = 98;
var getKTemp = farenToKel( inputTemp );
console.log("Kelvin temperature is:",getKTemp);