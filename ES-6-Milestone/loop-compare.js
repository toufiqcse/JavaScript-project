const poot = {
  color: "green",
  price: 573,
  hold: "water",
  isCleaned: true,
};
/*
for(const poot of poots) // used in array
for(const poot in poots) // used in object
*/
for (const prop in poot) {
  console.log(prop);
}
