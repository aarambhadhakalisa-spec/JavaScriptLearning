// //JSON = JavaScript Object Notation,It is light-weight data interchange format
// //These is a json format example
//   {
//    "name":"John Doe",
//     "age":30,
//      "city":"New York"
// }

// to converts JSON string to JavaScript object we use JSON.parse() method
// const students = {
//     "name": "John Doe",
//     "age": 30,
//     "city": "New York"
// };

// const jsonData = JSON.stringify(students);

// console.log("JSON String:");
// console.log(jsonData);

// const person = JSON.parse(jsonData);

// console.log("JavaScript Object:");
// console.log(person);

async function loadJson() {
    const response= await fetch("customer.json");
    const data= await response.json();
    console.log (data);

}
loadJson();