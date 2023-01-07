// @ts-nocheck
const products = {
  type: "Electric",
  displayType() {
    console.log(this.type);
  },
};
// create object
const product1 = Object.create(products);
product1.displayType();

// delating the object
const myObject = new Object();
myObject.a = 5;
myObject.b = 4;
delete myObject.a;
console.log("a" in myObject);
