const book1 = 100;
const book2 = 200;
const book3 = 300;

function pageequirements(firstBook, secondBook, thirdBook) {
  var bookPage = firstBook * book1;
  var bookPage = secondBook * book2;
  var bookPage = thirdBook * book3;
  return bookPage;
}

var inputForFirstBook = pageequirements(5);
var inputForSecondBook = pageequirements(3);
var inputForThirdBook = pageequirements(5);
console.log(inputForThirdBook);
