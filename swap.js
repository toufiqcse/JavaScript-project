//interchange the position of value
var firstNumber = 9;
var secondNumber = 4;
var thirdNumber = 2;
// i want this number are sortby lower positon
// create a temporary variable for store the first data.
console.log( firstNumber, secondNumber, thirdNumber ); //before sorting
var temp = firstNumber;
var secondTemp = secondNumber;
firstNumber = thirdNumber;
secondNumber = secondTemp;
thirdNumber = temp;
console.log( firstNumber, secondNumber, thirdNumber );//after sorting

//destructing method
[ firstNumber, secondNumber, thirdNumber ] = [ thirdNumber, secondNumber, firstNumber ];
console.log( firstNumber, secondNumber, thirdNumber );



