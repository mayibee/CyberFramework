/*
Try to be as explicit as possible and add Types to everything you can!
let bankAccount={
    money:2000,
    deposit(value){
        this.money += value;
    }
}

let myself={
    name:"Max",
    bankAccount:bankAccount,
    hobbies:["Sports","Cooking"]
}

myself.bankAccount.deposit(3000);
console.log(myself);
*/

// let bankAccount:{money:number,deposit:(value:number)=>void}={
//     money:2000,
//     deposit(value:number):void{
//         this.money += value;
//     }
// }

type BankAccount = { money: number, deposit: (val: number) => void };

let bankAccount: BankAccount = { //create object template
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: { name: string, bankAccount: BankAccount, hobbies: string[] } = {
    name: "Max",
    bankAccount: bankAccount, //use object template in another object
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(bankAccount.money);
console.log(myself);