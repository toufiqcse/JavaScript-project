//array
let countryName = [ "Bangladesh", "India", "Unaitaed State", "Pakistan", "Bhutan", "Nepal" ];
let countryCode = [ "+880", "002", "012", "876", "978", "004","98877","344","878" ];
console.log( "Country Code:" + countryName ); //array value
//total index
console.log( "total index" + countryName );
//index chnage of no1
countryName[ 1 ] = "Varot";
console.log( "index change:" + countryName[ 1 ] );
//for loop inside the array
for ( let i = 0; i < countryName.length; i++ )
{
    console.log("Country Name:" + countryName[i]);
}
//item remove from last
countryCode.pop();
//item add to last
countryName.push();
//item remove from starting
countryName.shift();
//item add to start
countryName.unshift( "Dhaka", "Joypurhat" );
//add\remove result
console.log( countryName );
//item remove by the use of index no:
countryName.splice( 3, 5 );
//remove from indifinite item to last
countryCode.splice( 3 );
///result
console.log( countryCode );
//splice data are stored in splice array variable
let spliceData = [ '1', "2", "3", "4", "5", "6", "7", "8", "9" ];
let spliceArray = spliceData.splice( 4 );
console.log( "Splice stored data:" + spliceArray );
