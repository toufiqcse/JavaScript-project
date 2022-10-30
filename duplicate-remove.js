let duplicateArr = [1, 1, 2, 3, 3, 2, 3, 4, 5, 34, 44, 33, 33, 55, 66, 66, 43];
// let duplicateArr = [ "habul", 'habul', 'kabul', 'kabul', 'jarif', 'neela', 'neela', 'rabeya', 'reba', 'reba', 'afrin', 'promee', 'promee' ];
let uniqueArr = [...new Set(duplicateArr)]; //ES-6 version
console.log(uniqueArr);
////duplicate data remove  from array..
const names = [
  "habul",
  "habul",
  "kabul",
  "kabul",
  "jarif",
  "neela",
  "neela",
  "rabeya",
  "reba",
  "reba",
  "afrin",
  "promee",
  "promee",
  "nishat",
  "tabassum",
  "tabassum",
];
function duplicateRemove(names) {
  const unique = [];
  for (const element of names) {
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  return unique;
}
const uniqueNames = duplicateRemove(names);
console.log(uniqueNames);
