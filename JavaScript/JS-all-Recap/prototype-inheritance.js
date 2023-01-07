// JS er nijosoo prototyper moddhe nijer create kora function add kora
// @ts-ignore
String.prototype.helloToufiq = function () {
  return "Hello Toufiq";
};
const x = "Bangladesh";
// @ts-ignore
console.log(x.helloToufiq());

//advanced prototype
let person = {};

console.log(person);

person.name = "John";
person.age = 23;

//older system
person.eat = function () {
  console.log("Person is eating");
};
person.sleep = function () {
  console.log("Person is sleeping");
};

//Update system
// jodi common kono method thake tahole seta alada kore object likhe main function theke refer kore dite hbe
//but etao akta week processing
const personMethods = {
  //   eat() {
  //     console.log("Person is eating");
  //   },
  //   sleep() {
  //     return "Person is sleeping";
  //   },
  //   play() {
  //     return "Person is playing";
  //   },
};

//constructor basic function
function Person(name, age) {
  let person = Object.create(Person.prototype); //parent call korlam
  person.name = name;
  person.age = age;
  //   person.eat = personMethods.eat;
  //   person.sleep = personMethods.sleep;
  //   person.play = personMethods.play;
  return person;
}

//method of constructor function
Person.prototype = {
  eat() {
    console.log("Person is eating");
  },
  sleep() {
    return "Person is sleeping";
  },
  play() {
    return "Person is playing";
  },
};

console.dir();
console.log(Person);

const sakib = Person("Sakib", 23);
console.log(sakib);
console.log(sakib.play());

//----ES_6 Constructor Function-----

function PersonNew(name, age) {
  this.name = name;
  this.age = age;
}
PersonNew.prototype = {
  eat() {
    console.log("Person is eating");
  },
  sleep() {
    return "Person is sleeping";
  },
  play() {
    return "Person is playing";
  },
};
const rakib = new PersonNew("Rakib", 23);
console.log(rakib);
console.log(rakib.play());

//class
// use korle prototype use korte hbe na

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //declare methods
  eat() {
    console.log("Person is eating");
  }
  sleep() {
    return "Person is sleeping";
  }
  play() {
    return "Person is playing";
  }
}

const akib = new Person2("Rakib", 23);
console.log(akib);
console.log(akib.sleep());
