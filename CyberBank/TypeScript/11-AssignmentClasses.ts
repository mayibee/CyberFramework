//Re-write all this code using TypeScript and Class Features.

/*Exercise 1 - How was your TypeScript Class?
function Car(name) {
    this.name = name;
    this.acceleration = 0;
 
    this.honk = function() {
        console.log("Toooooooooot!");
    };
 
    this.accelerate = function(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
*/

class Car{
    name:string;
    acceleration:number=0;
    constructor(name:string){
        this.name=name;
    }
    honk(){
        console.log("Toooot");
    }
    accelerate(speed:number){
        this.acceleration=this.acceleration + speed;
    }
}
const cr = new Car("BMW");
cr.honk();
console.log(cr.acceleration);
cr.accelerate(20);
console.log(cr.acceleration);

/* Exercise 2 - Two objects, based on each other ...
var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
    return this.width * this.length;
};
console.log(rectangle.calcSize());
*/

class BaseObject{
    width=0;
    length=0;
}

class Rectangle extends BaseObject{
    calcSize(){
        return this.width * this.length;
    }
}
const rectangle = new Rectangle();
rectangle.width=5;
rectangle.length=10;
console.log(rectangle.calcSize);