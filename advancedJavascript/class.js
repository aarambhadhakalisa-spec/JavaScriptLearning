class Students {
    constructor(name, age, city, grade, rollNumber, percentage) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.grade = grade;
        this.rollNumber = rollNumber;
        this.percentage = percentage;
    }

    studentDetails() {
        return `Student Details: ${this.name}, Age: ${this.age}, City: ${this.city}, Grade: ${this.grade}, Roll Number: ${this.rollNumber}, Percentage: ${this.percentage}%`;
    }
}

const student1 = new Students("Alice", 20, "New York", "A", 101, 95);
const student2 = new Students("Bob", 22, "Los Angeles", "B", 102, 85);
const student3 = new Students("Charlie", 21, "Chicago", "A", 103, 90);

console.log(student1.studentDetails());
console.log(student2.studentDetails());
console.log(student3.studentDetails());

class Teacher extends Students {
    constructor(name, age, city, grade, rollNumber, percentage, subject) {
        super(name, age, city, grade, rollNumber, percentage);
        this.subject = subject;
    }

    teacherDetails() {
        return `Teacher Details: ${this.name}, Age: ${this.age}, City: ${this.city}, Subject: ${this.subject}`;
    }
}

const teacher1 = new Teacher(
    "Ritesh", 25, "New Delhi", "A", 104, 90, "Maths"
);

console.log(teacher1.teacherDetails());

const students = [student1, student2, student3];

students.forEach((student) => {
    console.log(
        `${student.studentDetails()}, Subject: ${teacher1.subject} (Teacher: ${teacher1.name})`
    );
});