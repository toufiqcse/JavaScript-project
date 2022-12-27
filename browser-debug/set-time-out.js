const doSomething = () => {
  console.log("Hello Set Time out ");
};
const doSomethingTimeOut = () => {
  console.log("Hello Set Time out  after 6s ");
};
console.log("Hi Im First Examnee");
console.log("Hi Im Second Examnee");
console.log("Hi Im Third Examnee");
doSomething();
setTimeout(doSomethingTimeOut, 6000);
// set time out
setTimeout(function () {
  console.log("Hello Set Time out  after 8s");
}, 8000);
setTimeout(() => {
  console.log("Hello Set Time out  after 9s");
}, 9000);
console.log("Hi Im Coding");
