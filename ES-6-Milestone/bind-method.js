// bind use kore uporer object er kono function nicher konoo obj e use kora jai
const kibria = {
  Id: 322,
  name: "Rj Kibria",
  money: 4000,
  treatDey: function (e) {
    this.money = this.money - e;
    console.log("Here", this);
    return this.money;
  },
};

const heroBalam = {
  Id: 233,
  name: "Balam Khan",
  money: 6000,
};
// kibria.treatDey(500);
const heroTreatDey = kibria.treatDey.bind(heroBalam);
heroTreatDey(1000);
