const kibria2 = {
  Id: 322,
  name: "Rj Kibria",
  money: 4000,
  treatDey: function (e, boksis, tax) {
    this.money = this.money - e - boksis - tax;
    console.log("Here", this);
    return this.money;
  },
};

const heroBalam2 = {
  Id: 233,
  name: "Balam Khan",
  money: 6000,
};
// kibria.treatDey(500);
//   const heroTreatDey = kibria.treatDey.bind(heroBalam);
//   heroTreatDey(1000);
// Call
kibria2.treatDey.call(heroBalam2, 500, 100, 50);
kibria2.treatDey.call(heroBalam2, 2000, 200, 30);

//Apply
kibria2.treatDey.apply(heroBalam2, [500, 100, 50]);
// apply use korle [,,,] die likhte hbe

// এদের কাজ হল একটা অব্জেজট এ যে মেথড আছে সেটা অন্য আরেটি
// অবজেক্টে ব্যবহার করা হয়
