const myObject = {
  name: "Toufiqul Isalm",
  age: 24,
  DOB: "01 Jan 1999",
  hobbies: "Progrmming",
  skill: ["Web Developer", "App design", "Graphic Designer"],
};

const myBio = `My Name is ${myObject.name}, my age is ${myObject.age} I have enough skill about ${myObject.skill[0]}`;

console.log(myBio);

// arrow functions
const isEven = (x) => x % 2 == 0;
console.log(isEven(69));
const array = [10, 23, 3, 2, 45, 3, 33, 6, 7, 8];

// spread operators
// eta die akta array er new arekta copy kora jai
const newArray = [...array];
array.push(100);
console.log(newArray);
console.log(array);
