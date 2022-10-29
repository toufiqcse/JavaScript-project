var freindList = ["Azmina Akter Neela", "Rabeya Akter Reba", "Linda"];

var length = 0;
var longLetter;
for (var i = 0; i < freindList.length; i++) {
  if (freindList[i].length > length) {
    var length = freindList[i].length;
    longLetter = freindList[i];
  }
}
console.log(" My Best Freind", longLetter);
