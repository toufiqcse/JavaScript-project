// @ts-nocheck
const fish = {
  id: 10,
  name: "Hilisha",
  price: 4000,
  phone: "018736377",
  address: "Chadpur",
  dress: "Silver",
};

const phoneNumber = fish.phone;
const fishPrice = fish.price;
console.log(phoneNumber);
console.log(fishPrice);

// catch the property from the object and create  new variables
const akotaTraders = {
  name: "akotaTraders",
  ceo: {
    id: 92882,
    name: "Toufiq",
    Address: "Joypurhat",
    // @ts-ignore
    // @ts-ignore
    phone: 0173,
  },
  services: {
    work: "Web site design",
    employee: "100",
    frameWork: "React JS",
    tech: {
      first: "HTML",
      second: "CSS",
    },
  },
};

const { frameWork, employee } = akotaTraders.services;
console.log(frameWork, employee);
const { phone } = akotaTraders.ceo;
console.log(phone);

//Array Destructuring
const [best, faltu] = ["Azmina Akter Neela", "Shorna akter Nodi"];
console.log(best, faltu);

// Object chanining
//যদি object property না থাকে তাহলে value  এর সামনে ? ব্যাবহার করতে হবে
const myObject = { x: 3, y: 5, z: 6 };
const { x, y } = { myObject };
console.log(myObject?.p?.q?.r);
