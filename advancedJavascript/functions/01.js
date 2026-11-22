// //function declaration

// function add(a,b) {
//     return a+b;
// }

// x = add(5, 6);
// console.log(x);


// //function expression
// const multiply = function(a,b) {
//     return a*b;
// }

// x = multiply(5, 6);
// console.log(x);


//arrow funciton
// const subtract = (a,b) =>{return a-b};
// console.log(subtract(5, 4));


//function constructor
// const add = new Function('a', 'b', 'return a+b');
// console.log(add(5, 6));


//Function object methods
const object = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  },
};
console.log(object.add(5, 6));
console.log(object.subtract(5, 6));
console.log(object.multiply(5, 6));
console.log(object.divide(5, 6));




