// Area of Triangle
/*
*base = 3 meter
height= 4 meter
Area =?
*/

function areaOfTriangle(base, height) {
  this.base = base;
  this.height = height;
  this.Area = function () {
    return (base * height) / 2;
  };
}
var getTriangleArea = new areaOfTriangle(3, 4);
console.log("Area of Triangle", getTriangleArea.Area());
