//multiple parameter
function addTwoNumber ( num1, num2 )
{
    console.log( num1, num2 );
    let total = num1 + num2;
    return total;
}
let firstNumber = 30;
let secondnumber = 44;
let result = addTwoNumber( firstNumber, secondnumber );
console.log("Addition Result value:", result);
//multiplication function
function multiplyTwoNumber ( num1, num2 )
{
    let result = num1 * num2;
    return result;
}
let  multiply = multiplyTwoNumber( firstNumber, secondnumber );
console.log("Multiply number value:",multiply);
//substract two number
function substractTwoNumber ( num1, num2 ) //two parameter
{
    let resultSubstract = num1 - num2;
    return resultSubstract;
}
let  substract = substractTwoNumber( firstNumber, secondnumber );
console.log("Substract number value:",substract);