var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculate(diameter) {
        return diameter * PI;
    }
    MyMath.calculate = calculate;
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
var PI = 2.99;
console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.calculate(3));
console.log(PI);
