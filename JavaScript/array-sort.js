const number = [3, 4, 5, 6, 2, 8, 9, 1];
const sortedNumber = number.sort();
console.log(sortedNumber);
// sorting by letter A- Z
const myFriend = [
  "Rabeya Akter",
  "Badol Hasan",
  "Azmina Akter",
  "Rabbiul",
  "Chandni Akter",
  "Mehedy Hasan",
  "Alomgir Kobir",
  "Mimma Akter",
  "DeePu Rai",
];
const sortedFriends = myFriend.sort();
// console.log(sortedFriends);
// sorting by letter Z- A
var reversesortedFriends = myFriend.reverse();
console.log(reversesortedFriends);

//sorting big  number
const bigNumbeer = [22, 4, 32, 45, 6, 2, 3, 6, 7, 12, 35, , 645, 6555, 43, 999];
const sortedBigNumber = bigNumbeer.sort(function (a, b) {
  return a - b;
});

console.log(sortedBigNumber);
