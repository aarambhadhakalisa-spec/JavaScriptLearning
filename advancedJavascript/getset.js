// // // To implement abstraction and encapsulation in JavaScript
// // // Abstraction: Data hiding part is generally called abstraction
// // // Getter and setter

// // // Get method example


// // const person = {
// //     firstName: "John",
// //     lastName: "Doe",
// //     language: "en",

// //     get lang() {
// //         return this.language;
// //     },

// //     get first() {
// //         return this.firstName;
// //     },

// //     get last() {
// //         return this.lastName;
// //     },
    
// //     get fullName() {
// //         return this.firstName+ " " + this.lastName;
// //     }
// // }

// // console.log(person.first);
// // console.log(person.last);
// // console.log(person.fullName);
// // console.log(person.lang);



//  // Create a person object
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "",

//     set lang(lang) {
//         this.language = lang;
//     }
// };

// person.lang = "en";
// console.log(person);
// console.log(person.lang);



const person1 = {
    firstName: "",
    lastName: "",
    language: "en",

    set first(first) {
        this.firstName = first;
    },

    set last(last) {
        this.lastName = last;
    }
};

person1.first = "Aarambha";
person1.lastName = "Dhakal";

const caramba = person1.firstName;
const dhakal = person1.lastName;

console.log(caramba);
console.log(dhakal);





