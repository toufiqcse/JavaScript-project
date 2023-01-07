function animalCount(miles) {
  const animalDensityFirst10Miles = 10;
  const animalDensitySeondt10Miles = 50;
  const animalDensityRestMiles = 100;
  if (miles <= 10) {
    const count = miles * animalDensityFirst10Miles;
    return count;
  } else if (miles <= 20) {
    const firstdDensityAnimal = 10 * animalDensityFirst10Miles;
    const restMiles = miles - 10;
    const secondDensityAnimal = restMiles * animalDensitySeondt10Miles;
    const totalAnimals = firstdDensityAnimal + secondDensityAnimal;
    return totalAnimals;
  } else {
    const firstdDensityAnimal = 10 * animalDensityFirst10Miles;
    const secondDensityAnimal = 10 * animalDensitySeondt10Miles;
    const restMiles = miles - 20;
    const restDEnseAnimals = restMiles * animalDensityRestMiles;
    const totalAnimals =
      firstdDensityAnimal + secondDensityAnimal + restDEnseAnimals;
    return totalAnimals;
  }
}
const animal = animalCount(35);
console.log("Total Animal " + animal);
