import {Payload} from './Payload';
import {Cargo} from './Cargo';
import {Astronaut} from './Astronaut';

export class Rocket{
    name:string;
    totalCapacityKg:number;
    cargoItems:Cargo[] = [];
    astronauts:Astronaut[] = [];

    constructor(name:string,totalCapacityKg:number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items:Payload[]):number{
        let sum:number = 0;

        for (let i:number = 0; i < items.length; i++){
            sum += items[i].massKg;
        }

        return sum;
    }

    currentMassKg():number{
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item:Payload):boolean{
        let potentialMass:number = this.currentMassKg() + item.massKg;
        if(potentialMass <= this.totalCapacityKg){
            return true;
        }
        return false;
    }

    addCargo(cargo:Cargo):boolean{
        if (this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    addAstronaut(astronaut:Astronaut):boolean{
        if (this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}