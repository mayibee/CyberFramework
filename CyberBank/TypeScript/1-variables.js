//string (once you determine once what type it is, it will not change it, you can only use same type for example string, you can also declare it in the name)
var myName = "Mike";
var myName2 = "Mike";
//number
var myAge = 27;
var myAge2 = 30;
//boolean
var hasHobbies = false;
var hasHobbies2 = true;
//any -> you can assign different data types
var variable = "Mike";
variable = 4;
//array
var myArray = [4, 5, 300];
myArray = [200, "apple"];
//tuples -> different datatype of array
var address = ["Superstreet", 90];
//enum 
var color;
(function (color) {
    color[color["gray"] = 0] = "gray";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue"; //2
})(color || (color = {}));
var myColor = color.green;
console.log(myColor);
var color2;
(function (color2) {
    color2[color2["gray"] = 0] = "gray";
    color2[color2["green"] = 100] = "green";
    color2[color2["blue"] = 101] = "blue"; //2
})(color2 || (color2 = {}));
var myColor2 = color2.green;
console.log(myColor2);
var myColor3 = color2.blue;
console.log(myColor3);
//any Object
var car = "honda";
car = { model: "honda", year: 2018 };
//union type -> either string or number
var myRealAge;
myRealAge = "30";
myRealAge = 43;
//how to check types typeof
var finalValue = "apple";
if (typeof finalValue == "string") {
    console.log("this is a string");
}
