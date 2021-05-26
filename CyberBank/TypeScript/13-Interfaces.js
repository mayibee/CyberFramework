var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!!!"; }
};
console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
var person = {
    firstName: "Mike",
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
var PersonX = /** @class */ (function () {
    function PersonX() {
    }
    PersonX.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return PersonX;
}());
var oldPerson = {
    age: 27,
    firstName: "Smith",
    greet: function (lastName) {
        console.log("Hello");
    }
};
