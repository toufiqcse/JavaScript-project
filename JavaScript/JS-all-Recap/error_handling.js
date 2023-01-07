// exception handling statements

// throw exception
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function getMonths(monthName) {
  if (months[monthName]) {
    return months[monthName];
  } else {
    throw "Invalid month name";
  }
}
// console.log(getMonths());

try {
  const num1 = 10;
  const num2 = "string";
  const sum = num + num2;
  console.log(sum);
} catch (e) {
  console.log("Sum has something error: " + e.message);
} finally {
  console.log("Finally the sum has successfully ");
}
