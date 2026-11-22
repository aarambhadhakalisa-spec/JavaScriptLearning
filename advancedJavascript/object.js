class Student {
    constructor(name, age, city, grade, rollNumber, percentage) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.grade = grade;
        this.rollNumber = rollNumber;
        this.percentage = percentage;
    }

    studentDetails() {
        return `Student Details: Name: ${this.name}, Age: ${this.age}, City: ${this.city}, Grade: ${this.grade}, Roll No: ${this.rollNumber}, Percentage: ${this.percentage}%`;
    }
}

const student1 = new Student("Alice", 16, "New York", "10th", 101, 88.5);
const student2 = new Student("Bob", 17, "Chicago", "11th", 102, 92.0);
const student3 = new Student("Charlie", 15, "Los Angeles", "9th", 103, 79.4);

console.log(student1.studentDetails());
console.log(student2.studentDetails());
console.log(student3.studentDetails());dw