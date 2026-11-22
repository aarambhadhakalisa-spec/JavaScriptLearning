class Car {
    constructor(brand, age, city, model, carNumber, price) {
        this.brand = brand;
        this.age = age;
        this.city = city;
        this.model = model;
        this.carNumber = carNumber;
        this.price = price;
    }

    carDetails() {
        return `Car Details: ${this.brand}, Age: ${this.age}, City: ${this.city}, Model: ${this.model}, Car Number: ${this.carNumber}, Price: £${this.price}`;
    }
}

const car1 = new Car("BMW", 2, "London", "M4", 101, 65000);
const car2 = new Car("Audi", 3, "Manchester", "A5", 102, 40000);
const car3 = new Car("Mercedes", 1, "Birmingham", "C-Class", 103, 55000);

console.log(car1.carDetails());
console.log(car2.carDetails());
console.log(car3.carDetails());

class Seller extends Car {
    constructor(brand, age, city, model, carNumber, price, commission) {
        super(brand, age, city, model, carNumber, price);
        this.commission = commission;
    }

    sellerDetails() {
        return `Seller Details: ${this.brand}, Age: ${this.age}, City: ${this.city}, Commission: £${this.commission}`;
    }
}

const seller1 = new Seller(
    "BMW", 2, "London", "M4", 104, 65000, 2000
);

console.log(seller1.sellerDetails());

const cars = [car1, car2, car3];

cars.forEach((car) => {
    console.log(
        `${car.carDetails()}, Commission: £${seller1.commission} (Seller: ${seller1.brand})`
    );
});