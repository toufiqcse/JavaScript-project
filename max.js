//compare three number (identify bigger number)
const businessMan = 450;
const minister = 550;
const army = 600;
if ( businessMan > minister && businessMan > army ) {
    console.log( "Bussiness  is greater" );
}
else if ( minister > army && minister > businessMan )
{
    console.log("Minister is greater");
}
else 
{
    console.log("Army is greater");
}
//using math funtion
var maxNumber = Math.max( businessMan, minister, army );
console.log( "Largest number is:", maxNumber );
//using function two number 
function findLargest ( firstNumber, secondNumber )
{
    if ( firstNumber > secondNumber )
    {
        return firstNumber;
    }
    return secondNumber;
}
const  largest = findLargest( 300, 400 );
console.log( "largest Number", largest );

//using function by the three numbers
function largestThreeNumber(firstNum,secondNum,thirdNum)
{
    if ( firstNum > secondNum && firstNum > thirdNum )
    {
        return firstNum;
    }
    else if ( secondNum > firstNum && secondNum > thirdNum )
    {
        return secondNum;
    }
    else
    {
        return thirdNum;
    }
}
const largestNum = largestThreeNumber( 290, 439, 500 );
console.log("Largest number of three number is:", largestNum);