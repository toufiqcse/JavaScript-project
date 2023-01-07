// //function decleration
// function addNumber(num1, num2) {
//     return num1 + num2;
// }
// const firstValue = addNumber( 3, 4 );
// const secondValue = addNumber( 20, 30 );
// //function expression
// const anotherValue = function ( num1, num2 )
// {
//     return num1 + num2;
// };
// const allValues = [ firstValue, secondValue,anotherValue(6,7) ];
// console.log( allValues );
// //Arrow function
// const multiply = ( num1, num2 ) => num1 * num2;
// exports.nameOfMethod = function ()
// {
    
// }
//calculateTotal
const calculateTotal  =  function random( subTotal, tax )
{
    // const total = subTotal + tax;
    // return total;
    return subTotal + tax;
}
// console.log("calculate Total: " + calculateTotal( 200, 20 ) );
const order1 = calculateTotal( 100, 20 );
const order2 = calculateTotal( 50, 10 );
const order3 = calculateTotal( 80, 30 );
console.log( order1, order2, order3 );