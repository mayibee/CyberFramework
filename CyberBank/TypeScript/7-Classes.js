var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 41;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var individual = new Person("Mike", "Smith");
console.log(individual.name, individual.username);
individual.printAge();
individual.setType("Cool Guy!");
//Inheritance
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    function Max(username) {
        var _this = _super.call(this, "Max", username) || this;
        _this.age = 31;
        return _this;
    }
    return Max;
}(Person));
var max = new Max("max");
console.log(max);
