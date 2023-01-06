// @ts-nocheck
//spilt
const myString = "Amar Sonar Bangla Ami Tomai Valobashi ";
const getAllWord = myString.split(" ");
console.log(getAllWord);
//get single word
console.log(getAllWord[1]);
const getCharecter = myString.split("");
console.log(getCharecter[5]);
//get new string from old string
const copyString = myString.split();
console.log(copyString);

// subString return the part from the original string
console.log(myString.substring(5, 9));

//The match() method retrieves the result of matching a
// string against a regular expression.

const myEmail = "toufiqcse7@gmail.Com";
const regExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const result = myEmail.match(regExp);
console.log(resultsd);

const newRegExp = /[A-Z]/g;
console.log(myEmail.match(newRegExp));

// replace
console.log(myEmail.replace("Com", "yahoo"));

//The search() method executes a search for a match between a regular expression and this String object.
const searchText = myEmail.search("gmail.Com");
console.log(searchText);
//repeat
console.log(myEmail.repeat(3));

// Date Time Formatting
const toDay = new Date();
const options = {
  year: "2-digits",
  month: "2-digits",
  day: "2-digits",
  hour: "2-digits",
  minute: "2-digits",
  timeZoneName: "short",
};
// const InternationalTimeFormatting = new Intl.DateTimeFormat('en-US', options).format
// console.log(InternationalTimeFormatting(toDay));

//Number Formatting

console.log(
  new Intl.NumberFormat("bn-BD", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 2,
  }).format(123456789)
);
