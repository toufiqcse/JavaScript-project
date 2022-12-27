const bottole = {
  color: "green",
  price: 573,
  hold: "water",
  isCleaned: true,
};
//getting the all properties name from the object

const allkeys = Object.keys(bottole);
console.log(allkeys);
//getting the pairs from the object
const allPairs = Object.entries(bottole);
console.log(allPairs);

// deltete the properties from the object

delete bottole.isCleaned;
console.log(bottole);

// object ke seal kora
// seal korle kono properties r add kora jai na delete kora jai na
Object.seal(bottole);
Object.freeze(bottole); // kono kicui kaj hbe na
console.log(bottole);
