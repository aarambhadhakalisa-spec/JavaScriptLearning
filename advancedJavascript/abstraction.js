// // abstraction in js
// // it is generaly hiding the complex data set fro th e user and provide the simple interface to the user.


// class Student {
//     constructor(name, age, city, grade, rollNumber, percentage) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//         this.grade = grade;
//         this.rollNumber = rollNumber;
//         this.percentage = percentage;
//     }

//     studentDetails() {
//         return `Student Details: ${this.name}, Age: ${this.age}, City: ${this.city}, Roll Number: ${this.rollNumber}, Percentage: ${this.percentage}%`;
//     }
// }

// const student1 = new Student("Alice", 20, "New York", "A", 101, 95);
// const student2 = new Student("Bob", 22, "Los Angeles", "B", 102, 85);
// const student3 = new Student("Charlie", 21, "Chicago", "A", 103, 90);

// console.log(student1.studentDetails());
// console.log(student2.studentDetails());
// console.log(student3.studentDetails());




// //using the protect methid ot hide the complex data, set from user


class Car {
    #speed = 0;
    #maxSpeed = 200;

    // Private method: handles the complex logic
    #changeSpeed(amount) {
        this.#speed = Math.min(
            this.#maxSpeed,
            Math.max(0, this.#speed + amount)
        );

        this.#showSpeed();
    }

    // Private method: displays the current speed
    #showSpeed() {
        console.log("This car is moving at a speed of " + this.#speed);
    }

    // Public methods: simple interface for the user
    pressPedal() {
        this.#changeSpeed(10);
    }

    pressBrake() {
        this.#changeSpeed(-10);
    }

    getSpeed() {
        return this.#speed;
    }
}

// Create an object
const myCar = new Car();

myCar.pressPedal();
myCar.pressPedal();
myCar.pressBrake();

console.log("Current speed:", myCar.getSpeed());
