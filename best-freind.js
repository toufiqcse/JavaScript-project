const freindList = ["Mohammad Ali Khan", "Abdur Rahman", "Linda"];

function getLargestWord() {
  let largest = 0;
  let shortest = 0;
  for (let i = 0; i < freindList.length; i++) {
    if (freindList[i].length > freindList[largest].length) {
      largest = i;
    }
  }
  return freindList[largest];
}
let largeWord = getLargestWord();

console.log("Largest word: ", largeWord);

//ShortestLetter
const words = ["bil", "plante", "kaffe", "bog", "hi", "planetarium"];

function getShortestWord() {
  let shortest = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length < words[shortest].length) {
      shortest = i;
    }
  }
  return words[shortest];
}

let shortest = getShortestWord();
console.log("Shortest Word = " + shortest);
