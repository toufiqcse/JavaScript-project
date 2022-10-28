// oldest age
function oldestElement(numbers) {
  let oldestNumber = 1;
  for (i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > oldestNumber) {
      oldestNumber = element;
    }
  }
  return oldestNumber;
}
const ages = [20, 38, 83, 74, 8, 4, 37, 3];
const oldestAge = oldestElement(ages);
console.log("Oldest age is:", oldestAge);
//smallest number:
function smallestElement() {
  const age = [20, 38, 83, 74, 8, 4, 37, 3, 2];
  let smallestNumber = age[0];
  for (i = 0; i < age.length; i++) {
    const element = age[i];
    if (element < smallestNumber) {
      smallestNumber = element;
    }
  }
  return smallestNumber;
}

const smallAge = smallestElement();
console.log("Smallest  age is:", smallAge);

///demo
function tinyFriends() {
  let myFriends = ["Mukit", "Ali", "Umor", "sabbir"];
  let smallestFridend = myFriends[0];
  for (i = 0; i < myFriends.length; i++) {
    if (myFriends[i] < smallestFridend) {
      smallestFridend = myFriends[i];
    }
  }
  return smallestFridend;
}
var frnd = tinyFriends();
console.log(frnd);
