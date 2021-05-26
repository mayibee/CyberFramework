class Person {
    name: string;
    private type: string;
    protected age: number = 41;
    constructor(name: string, public username: string) {
        this.name = name;
    }
    printAge() {
        console.log(this.age);
    }
    setType(type: string) { //methods can be private or protected as well
        this.type = type;
        console.log(this.type);
    }
}
const individual = new Person("Mike", "Smith");
console.log(individual.name, individual.username);
individual.printAge();
individual.setType("Cool Guy!");

//Inheritance
class Max extends Person{
    constructor(username:string){
        super("Max",username);
        this.age=31;
    }
}
const max = new Max("max");
console.log(max);