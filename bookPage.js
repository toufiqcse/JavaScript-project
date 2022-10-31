const book1 = 100;
const book2 = 200;
const book3 = 300;

function requiredCopy(inputPage) {
  this.inputPage = inputPage;
  this.firstBook = function () {
    return book1 * inputPage;
  };
  this.secondBook = function () {
    return book2 * inputPage;
  };
}
var getRequiredPage = new requiredCopy(4);
console.log("book1 Required Page", getRequiredPage.firstBook().toFixed(2));
console.log("book2 Required Page", getRequiredPage.secondBook().toFixed(2));
