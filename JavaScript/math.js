//absolute number
const myNumber = -5; 
const result = Math.abs( myNumber );// always show positive 
console.log( result );
//Float to Integer
// to upperlevel 
const number = 23.343423;
const output = Math.ceil( number );//ceiling level
console.log( output );
//to lower level
const num = 21.999;
// const resultNum = Math.floor( num );//lower number
const resultNum = Math.round( num ); //nearest number
console.log(resultNum);