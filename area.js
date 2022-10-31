function areaOfcircle(radius) {
  this.radius = radius;
  // area method
  this.area = function () {
    return Math.PI * this.radius * this.radius; // PIr^2
  };
  // perimeter method
  this.perimeter = function () {
    return 2 * Math.PI * this.radius; //2PIr
  };
}
var getArea = new areaOfcircle(5);
console.log("Area =", getArea.area().toFixed(2));
console.log("perimeter =", getArea.perimeter().toFixed(2));
