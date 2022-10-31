//inch to feet convert
// var inches = 132;
// var feet = inches / 12;
// console.log( "Feet:", feet );
//create function for convert:
function inchToFeet ( inches )
{
    var feet = inches / 12;
    return feet;
}
var inputInches = 120;
var feet = inchToFeet( inputInches );
console.log( "In Feet:", feet );
//mile to kilometer convert..
function mileToKilometer (miles)
{
    var km = miles * 1.6093;
    return km;
}
var inputmiles = 26.2;
var spinter = mileToKilometer( inputmiles);
console.log("Spinter km:",spinter);