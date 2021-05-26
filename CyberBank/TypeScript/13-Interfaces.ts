interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 
 
 var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
 } 
 
 console.log("Customer Object ") 
 console.log(customer.firstName) 
 console.log(customer.lastName) 
 console.log(customer.sayHi())  
 
 var employee:IPerson = { 
    firstName:"Jim",
    lastName:"Blakes", 
    sayHi: ():string =>{return "Hello!!!"} 
 } 
   
 console.log("Employee  Object ") 
 console.log(employee.firstName);
 console.log(employee.lastName)

//////////////////

interface namedPerson{
    firstName:string;
    age?:number;
    greet(lastName:string):void;
}

const person:namedPerson={
    firstName:"Mike",
    greet(lastName:string){
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
}

class PersonX implements namedPerson{
    firstName:string;
    lastName:string;
    greet(lastName:string){
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
}

//Interface Inheritance
interface AgedPerson extends namedPerson{
    age:number;
}
const oldPerson:AgedPerson={
    age:27,
    firstName:"Smith",
    greet(lastName:string){
        console.log("Hello");
    }
}