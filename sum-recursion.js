// let sum = 0;
// for (let i = 5; i >= 1; i--) {
//   //reverse way
//   sum += i;
// }
// console.log(sum);

function sumNumberRecursive(i) {
  if (i == 1) {
    return 1;
  }

  return i + sumNumberRecursive(--i);
}
console.log(sumNumberRecursive(50));
