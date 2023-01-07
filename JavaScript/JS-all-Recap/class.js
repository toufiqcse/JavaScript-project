class MyClass {
  // Constructor
  constructor() {
    // Constructor body
  }
}

// create a laptop

class Laptop {
  constructor(name, brand, price, color, configuration, OS) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.configuration = {
      RAM: "8 Gb DDR4",
      HDD: "Toshiba 1TB",
      SSD: "256 gb Apache",
    };
    this.OS = OS;
  }

  //set method
  condition() {
    console.log(`${this.name} is good Condition Laptop`);
  }
}

const newLaptop = new Laptop(
  "Lenovo ThinkPad-320",
  "Lenovo",
  55400,
  "gray",
  "windows 11 Supported",
  "Linux"
);

//
const newLaptop2 = new Laptop(
  "HP EliteBook Pro",
  "Lenovo",
  55400,
  "gray",
  "windows 11 Supported",
  "Linux"
);
console.log(newLaptop, newLaptop.condition());
console.log(newLaptop2, newLaptop2.condition());
