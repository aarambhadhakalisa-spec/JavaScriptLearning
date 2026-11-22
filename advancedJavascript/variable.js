// local variable ani global variable

//local variable are generally defined inside the function

//global variable are generally defined outside the function
// let const var
//let = specific variable value changeable
//const = specific variable value not changeable
//var = specific variable value changeable and is generally used outside function and in the case of the statement

//local variable example
// function myFunction() {
//     let x = 10;
//     console.log(x);
// }

let x = 10;
function myFunction() {
    console.log(x);
}

myFunction()
function myFunction2(){
    console.log(x);
}

myFunction2();