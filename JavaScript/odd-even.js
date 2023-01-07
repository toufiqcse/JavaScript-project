//even
function evenNumber (number)
{
    if ( number % 2 == 0 )
    {
        return true;
    }
    return false;
}
const myNumber = 212;
const myEvenNumber = evenNumber( myNumber );
console.log( "Number is Even", myEvenNumber );
//odd number
function oddNumber (number)
{
    if ( number % 2 != 0 )
    {
        return true;
    }
    else
    {
        return false;
    }
}
const inputOddNumber = 212;
const myOddNumber = oddNumber( inputOddNumber );
console.log("Number is Odd",myOddNumber);