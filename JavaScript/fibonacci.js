// 0, 1, 1, 2,3, 5, 8, 13,21, 34,55
/*
3rd = 2nd + 1th
5rd = 4th + 3th
nth = (n-1)th + (n-2)th
ith = (i-1)th + (i-2)th
*/
// const fiboNacci = [0, 1];
// for (let i = 2; i <= 20; i++) {
//   fiboNacci[i] = fiboNacci[i - 1] + fiboNacci[i - 2];
// }
// console.log(fiboNacci);
// //
// //using function
// function fiboNacciSeries(nth) {
//   if (typeof nth != "number") {
//     // input validation
//     return "Please give an number";
//   } else if (nth < 2) {
//     //input validation positive number.
//     return "Give a numer greater then 1";
//   }
//   const fiboNacci = [0, 1];
//   for (i = 2; i <= nth; i++) {
//     fiboNacci[i] = fiboNacci[i - 1] + fiboNacci[i - 2];
//   }
//   return fiboNacci;
// }
// const fiboSeries = 4;
// const getFibo = fiboNacciSeries(fiboSeries);
// console.log(getFibo);

//Fibonacci For nth terms
var fibonacci_series = function (nth) {
  if (nth === 1) {
    return [0, 1];
  } else {
    var series = fibonacci_series(nth - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
  }
};

console.log(fibonacci_series(2));

//Fibonacci using recursive

function recursiveFibonnacci(number) {
  if (number < 1) {
    return number;
  } else {
    return recursiveFibonnacci(number - 1) + recursiveFibonnacci(number - 2);
  }
}
