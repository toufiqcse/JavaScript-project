const numbers = [3, 4, 5, 2, 5, 9, 7, 12, 43, 56, 76];
const numberSlice = numbers.slice(2, 4);
// console.log(numberSlice);

// value delete from the array
const spliceNumber = numbers.splice(1, 6);
// console.log(spliceNumber);
// console.log(numbers);

// delete element from the arry and inserted into this deleted element
const myFriends = [
  "Rabeya Akter",
  "Azmina Akter",
  "Rabbiul",
  "Mehedy Hasan",
  "Alomgir Kobir",
  "Mimma Akter",
];
const newFriendInsert = myFriends.splice(
  3,
  2,
  "Afrin Jahan Kotha",
  "Shorna",
  "Neela Akter"
);
console.log(newFriendInsert);
console.log(myFriends);
