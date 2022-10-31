// let i = 0;
// while (i < 10) {
//   console.log(i);
//   if (i == 7) {
//     break;
//   }
//   i++;
// }
//for loop break when get the neagtive number
const numberArray = [6, 4, 5, 6, 7, 8, 9, 10, -22, -5];

for (let i = 0; i < numberArray.length; i++) {
  console.log(i);
  if (numberArray[i] < 0) {
    break;
  }
}

// for (let i = 0; i <= 20; i++) {
//   console.log(i);
//   if (i > 4) {
//     break;
//   }
// }
