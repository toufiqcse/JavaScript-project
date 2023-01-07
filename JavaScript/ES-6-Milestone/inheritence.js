// @ts-nocheck
class teamMembers {
  name;
  designation = "Support Web Development";
  address;
  phoneNumber;
  constructor(name, address, phoneNumber) {
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }
}
//
class StartClass extends teamMembers {
  groupSupportTime;
  constructor(name, address, phoneNumber, time) {
    super(name, address, phoneNumber);
    this.groupSupportTime = time;
  }
  startSession() {
    console.log(this.name, "Class  Started", time);
  }
}
// new class

class StudentCare extends teamMembers {
  topics;
  constructor(name, address, phoneNumber, subject) {
    super(name, address, phoneNumber);
    this.topics = subject;
  }
  buildARoutine() {
    console.log(this.name, "New Subject Started", subject);
  }
}

const alia = new StudentCare("Alia Bhat", "Mumbai", 0177, "Chemistry");
console.log(alia);

const Rabeya = new StartClass("Rabeya", "Rajshahi", "0187646765", 1300);
console.log(Rabeya);
