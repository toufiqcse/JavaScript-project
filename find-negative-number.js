var myArrray = [2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, -33, -44, -44];
function findNegativeNumber(array) {
  var negative = [];
  var positive = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      negative.push(array[i]);
    } else if (array[i] > 0) {
      positive.push(array[i]);
    }
  }
  return negative;
}
console.log(findNegativeNumber(myArrray));
