// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// recursion
function consoleNumber(i) {
  console.log(i);
  if (i >= 10) return;
  consoleNumber(i + 1);
}
consoleNumber(1);
