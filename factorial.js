//factorial...
let factorial = 1;
for ( let i = 1; i <= 3; i++ )
{
    factorial = factorial * i;
}
console.log( factorial );
//factorial with function
function getFactorial ( number )
{
    let factorialSet = 1;
    for ( let i = 1; i <= number; i++ )
    {
        factorialSet = factorialSet * i;
    }
    return factorialSet;
}
let inputFactorial = getFactorial( 10 );
console.log("Factorial is:",inputFactorial);