//string (once you determine once what type it is, it will not change it, you can only use same type for example string, you can also declare it in the name)
let myName="Mike";
let myName2:string="Mike";

//number
let myAge=27;
let myAge2:number=30;

//boolean
let hasHobbies=false;
let hasHobbies2:boolean=true;

//any -> you can assign different data types
let variable:any="Mike";
variable=4;

//array
let myArray:any=[4,5,300];
myArray=[200,"apple"];

//tuples -> different datatype of array
let address:[string,number]=["Superstreet",90];

//enum 
enum color {
    gray, //0
    green, //1
    blue //2
}

let myColor:color=color.green;
console.log(myColor);

enum color2 {
    gray, //0
    green=100, //1
    blue //2
}

let myColor2:color2=color2.green;
console.log(myColor2);

let myColor3:color2=color2.blue;
console.log(myColor3);

//any Object
let car:any="honda";
car={model:"honda",year:2018};

//union type -> either string or number
let myRealAge:string|number;
myRealAge="30";
myRealAge=43;

//how to check types typeof
let finalValue:string="apple";
if(typeof finalValue=="string"){
    console.log("this is a string");
}