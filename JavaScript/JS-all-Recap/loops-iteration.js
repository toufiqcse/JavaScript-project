/*
আপনি একটি লুপকে গেমের একটি কম্পিউটারাইজড সংস্করণ হিসাবে ভাবতে পারেন যেখানে আপনি কাউকে এক দিকে X পদক্ষেপ নিতে বলবেন, তারপরে Y ধাপ অন্য দিকে যেতে হবে। উদাহরণস্বরূপ, "পূর্ব দিকে পাঁচ ধাপ যান" ধারণাটি লুপ হিসাবে এভাবে প্রকাশ করা যেতে পারে
*/
for (let step = 0; step < 5; step++) {
  console.log("Walking east one step");
}

/// do..while loop
let i = 0;
do {
  i += 1;
  //   console.log(i);
} while (i < 100);
// while loop
// If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x = n;
}
// console.log(x);

// break the loop
//Use the break statement to terminate a loop
const numberArrays = [6, 0, -5, 6, 7, 8, 9, 10, -22, -5];

for (let i = 0; i < numberArrays.length; i++) {
  //   console.log(i);
  if (numberArrays[i] <= 0) {
    break;
  }
}

let ii = 0;
let nn = 0;
while (ii < 5) {
  ii++;
  if (ii === 3) {
    continue;
  }
  nn += ii;
  console.log(nn);
}

function dumpProps(obj, objName) {
  let result = "";
  for (const i in obj) {
    result += `${objName}.${i} = ${obj[i]}<br>`;
  }
  result += "<hr>";
  return result;
}

// console.log(dumpProps("man", "neela"));
const array = [3, 4, 5, 232, 33, 7];
for (const i in array) {
  console.log(i);
}
for (const off of array) {
  console.log(off);
}

// array destructuring
const myObj = { name: "Toufiq", age: 24, dob: 1999, address: "Dhaka" };
// get key & values from the obj like as pair(to use object.entries)

for (const [key, value] of Object.entries(myObj)) {
  console.log(key, value);
}
