// to make the object using the class in the javascript we can use the new keyword to create
//  an instance of the class. Here is an example:

class Car {
    constructor(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    carDetails() {
        return `Car Details: ${this.brand} ${this.model} ${this.year} ${this.color}`;
    }
}

const myCar = new Car("Toyota", "Camry", 2020, "Red");

console.log(myCar.carDetails());