// // // to implementthe encapsulation
// // //encapsulation data hiding using getter and sette method
// // //to add balnace £500

// // class bankAccount {
// //     constructor(name, balance){
// //         this.name = name;
// //         this.balance = balance;
// //     }

// //     deposit(amount){
// //         if (amount> 0 &&amount <= 20000){
// //             this.balance+=amount;
// //             console.log(`Deposited $${amount}. New Balance: $${this.balance}`);
// //         }
// //         else{
// //             console.log("Invalid deposited amount.");
// //         }

// //     }

// //     getBalance(){
// //         console.log("Account holder name:", this.name);
// //         console.log("Account balance:", this.balance);
        

// //     };
// // }

// // const account= new bankAccount("Aarambha", 1000);
// // account.deposit(500);
// // account.getBalance();


// // to implementthe encapsulation
// //encapsulation data hiding using getter and sette method
// //to add balnace £500




// class DiscountAmount {
//     constructor(amount) {
//         this.amount = amount;
//     }

//     calculateDiscount() {
//         if (this.amount > 2000) {
//             return this.amount * 0.10;
//         } else {
//             return 0;
//         }
//     }

//     getDiscount() {
//         return this.calculateDiscount();
//     }
// }

// const discount = new DiscountAmount(3000);
// const discountAmount = discount.getDiscount();

// console.log(discountAmount);


class Student{
    constructor(name, age, rollnumber, grade){
        this.name = name;
        this.age = age;
        this.rollnumber = rollnumber;
        this.grade = grade;
    }
    //to set the value
    // a setter takes only ONE parameter, so pass name and age together in an object
    set studentDetails({ name, age }){
        this.name = name;
        this.age = age;
    }

    get studentDetails(){
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

const student = new Student("Aarambha", 13, 104, "A");
console.log(student.studentDetails);            

student.studentDetails = { name: "Prasidda", age: x13 }; 
console.log(student.studentDetails);            