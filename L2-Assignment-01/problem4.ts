{
//Create a Vehicle class with private make and year properties and a getInfo() method.
// Create a Car class extending Vehicle, adding a private model property and a getModel() method.
class Vehicle {
    constructor (private make: string, public year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    
    constructor(make: string, year: number, private model: string) {
        super(make, year);
        this.model = model;
    }

    getModel(): string {
        return `Model: ${this.model}`;
    }
}


const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();

}