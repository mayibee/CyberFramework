//let and const
console.log("LET & CONST");
let vr = "Test";
console.log(vr);
vr="Another value";
console.log(vr);

const maxLevels=100;
console.log(maxLevels);
//maxLevels=200;

//Block Scope
function reset(){
    //console.log(vr); //undefined
    let vr = null;
    console.log(vr);
}
reset();
console.log(vr);

//arrow functions
console.log("ARROW FUNCTIONS");

const addNumbers = function(number1:number,number2:number):number{
    return number1+number2;
}
console.log(addNumbers(10,3));

const multiplyNumbers = (number1:number,number2:number) => number1*number2;
console.log(multiplyNumbers(10,3));

const greet = () => {
    console.log("Hello");
}
greet();

//Default Parameters : if you do not pass any parameters, it will take what you establish as default parameter. you can call with or without parameter. 
console.log("DEFAULT PARAMETERS");
const countDown = (start:number=10):void =>{
    console.log(start);
    while(start>0){
        start--;
    }
    console.log("Done!",start);
}
countDown(20);
countDown();

//Spread Operator
console.log("REST & SPREAD OPERATORS");
const numbers = [1,10,199,-5];
console.log(Math.max(33,99,10,-3));
console.log(Math.max(...numbers)); //spread array into list of items

function makeArray(...args: number[]){
    return args;
}
console.log(makeArray(1,2,6));

//Destructuring 
console.log("DESTRUCTURING");
const myHobbies = ["Cooking","Sports"];
//const hobby1=myHobbies[0];
//const hobby2=myHobbies[1];
const[hobby1,hobby2]=myHobbies;
console.log(hobby1,hobby2);

//object destructuring
const userData={userName:"Mike",age:27};
const {userName,age}=userData;
console.log(userName,age);

//Template Literals
const userName2="Mike";
const greeting="Hello,I am " + userName2;
console.log(greeting);
console.log(`Hello,I am ${userName2}`);