// declaring variable of object type
var user;
// assign value
user = {
    username: 'yusufshakeel',
    points: 9,
    description: 'This is my profile.'
};
console.log(user.points);
//complex object
var obj;
// assign value
obj = {
    x: 10,
    y: 20,
    getSum: function () {
        return this.x + this.y;
    }
};
// call the function getSum()
console.log("Sum: " + obj.getSum());
//complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
console.log(complex.output);
console.log(complex.data[1]);
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
