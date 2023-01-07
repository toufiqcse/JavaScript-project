const shop = {
  name: "Akota Super Shop",
  address: "Bonani Road Dhaka 1203",
  profit: 2737,
  products: ["alptop, mobile", "Smart Watch", "Pepsi"],
  owner: {
    name: "Alia Bhat",
    profession: "Actor",
  },
  isExpensive: false,
};

//convert Into String
const shopStringFied = JSON.stringify(shop);
// console.log(shopStringFied);

//Back from string and convert into object
const shopObject = JSON.parse(shopStringFied);
// console.log(shopObject);
