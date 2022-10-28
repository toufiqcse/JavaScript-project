// sum inside the value of array

const numbers = [ 30, 48, 74, 87, 3, 5, 36, 75, 37, 45, 2 ];
let sum = 0;
for ( i = 0; i < numbers.length; i++ )
{
    const element = numbers[ i ];
    sum = sum + element;
}
console.log( "The Summation of array number is:", sum );
// using function
function arrayTotal ( numbers )
{
    let sum = 0; // declare always outside the loop
    for ( i = 0; i < numbers.length; i++ )
    {
        const element = numbers[ i ];
        sum = sum + element;
    }
    return sum; // declare always outside the loop
}
const sumResult = arrayTotal( [ 20, 10, 30, 40 ] );
console.log( sumResult );
//find the biggest number inside the array
function largestElement ( numbers )
{
    let largestNumber = 0;
    for ( i = 0; i < numbers.length; i++ )
    {
        const element = numbers[ i ];
        if ( element > largestNumber )
        {
          largestNumber = element;
        }
    }
    return largestNumber;
}
const myNumbers = [ 39, 48, 3, 344, 47, 1, 8 ];
const large = largestElement( myNumbers );
console.log(large);