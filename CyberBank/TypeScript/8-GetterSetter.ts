//Getters & Setters to achieve encapsulation
class Plant{
    private _species:string;

    set species(value:string){ 
        if(value.length>3){
            this._species=value;
        }else{
            this._species="Default";
        }
    }

    get species(){
        return this._species;
    }
}

let plant = new Plant();
plant.species="AB"; //setter no need to put (), if you assign it will automatically be setter
console.log(plant.species); //getter no need to put (), if you don't assign it will be getter

//Static Properties & Methods attach to class, how can you call those objects, by class name, you do not need to instantiate.
class Helpers{
    static PI:number=3.14;
    static calcArea(diameter:number):number{
        return this.PI*diameter;
    }
}
console.log(2*Helpers.PI);
console.log(Helpers.calcArea);