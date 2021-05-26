//let and const
console.log("LET & CONST");
var vr = "Test";
console.log(vr);
vr = "Another value";
console.log(vr);
var maxLevels = 100;
console.log(maxLevels);
//maxLevels=200;
//Block Scope
function reset() {
    //console.log(vr); //undefined
    var vr = null;
    console.log(vr);
}
reset();
console.log(vr);
//arrow functions
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
var greet = function () {
    console.log("Hello");
};
greet();
//Default Parameters : if you do not pass any parameters, it will take what you establish as default parameter. you can call with or without parameter. 
console.log("DEFAULT PARAMETERS");
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countDown(20);
countDown();
//Spread Operator
console.log("REST & SPREAD OPERATORS");
var numbers = [1, 10, 199, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max.apply(Math, numbers)); //spread array into list of items
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 6));
//Destructuring 
console.log("DESTRUCTURING");
var myHobbies = ["Cooking", "Sports"];
//const hobby1=myHobbies[0];
//const hobby2=myHobbies[1];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
//object destructuring
var userData = { userName: "Mike", age: 27 };
var userName = userData.userName, age = userData.age;
console.log(userName, age);
//Template Literals
var userName2 = "Mike";
var greeting = "Hello,I am " + userName2;
console.log(greeting);
console.log("Hello,I am " + userName2);
