//IFEE system
var controller  = (function(){
    var person = {
        name: `Toufiq`,
        Id: 001
    };
    return person;
}) ();

var interface = (function () {
    return `Hello` + controller.name;
}) ();
console.log(this === window);