// @ts-nocheck
class Support {
  name;
  designation = "Support Web Development";
  address;
  phoneNumber;
  constructor(name, address, phoneNumber) {
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }
  startSession() {
    console.log(this.name, "Session Started");
  }
}
const toufiq = new Support("Toifiq", "BD", "01779764552");
const neela = new Support("Neela", "Rajshahi", "0187646765");
// start  session
toufiq.startSession();
neela.startSession();
console.log(toufiq);
console.log(neela);
