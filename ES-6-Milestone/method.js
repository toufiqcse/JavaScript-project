const student = {
  id: 101,
  name: "Toufiq",
  major: "Physics",
  isRich: true,
  subject: ["English", "French", "Calculas"],
  bestFriends: {
    name: "Neela",
    phoneNumber: "01778736637",
    address: {
      village: "Koitahar",
      union: "Amdai",
      post: "JS Sadar",
    },
  },
  takeExam: function () {
    console.log(this.subject[2], "Taking Exam");
  },
};

student.takeExam();
