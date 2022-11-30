const anthem = "Amar Sonar Bangla Ami Tomai Valobashi";

//get part by part words
const words = anthem.split(" ");
//get by without  a letter
const withoutA = anthem.split("a");
//get definite length
const smallSlice = anthem.slice(5, 11);
// console.log(smallSlice);
//substring start to end
const anotherPart = anthem.substr(5, 4);
// console.log(anotherPart);
//substring start to end
const otherPart = anthem.substring(3, 11); // as like slice
// console.log(otherPart);
// concat
const firstWord = "amar";
const secondWord = "Desh";
const fullString = firstWord.concat(secondWord).concat("Toufiq");
// console.log(fullString);
//joint
const letter = ["Mst", "Fatiha", "Akter", "Ayat"];
// const joinLetter = letter.join(" ");
const joinLetter = letter.join(", ");
// console.log(joinLetter);
