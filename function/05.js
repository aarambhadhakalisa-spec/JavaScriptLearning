// // // // // // //Return statement it is used to return the value from the function and which is generally inisde the parenthsise 
// // // // // // //The return statement is used to send a value out of a function.


// // // // // // //  write the program to display the arithmetic operations im it

// // // // // // a = [1,2,30, 70,80,500,900];

// // // // // // function sum(a){
// // // // // //     let sum =0;
// // // // // //     for (let i = 0; i < a.length; i++) {
// // // // // //         sum += a[i];
// // // // // //     }
// // // // // //     return sum;
// // // // // // }
// // // // // // let result = sum(a);
// // // // // // console.log(result);


// // // // // // array = [ 30, 50, 60, 133, 3333, 55555]


// let array = [30, 50, 60, 133, 3333, 55555];

// function calculate(arr) {
//     let totalSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         totalSum += arr[i];
//     }

//     let secondLast = arr[arr.length +2];
//     let last = arr[arr.length + 1];

//     let lastTwoSum = secondLast + last;

//     return {
//         totalSum: totalSum,
//         lastTwoSum: lastTwoSum
//     };
// }

// let result = calculate(array);

// console.log("Total Sum of Array:", result.totalSum);
// console.log("Sum of Last Two Elements:", result.lastTwoSum);

array = [ 30, 50, 60, 133, 3333, 55555]
//write a program to calculte the sum of the number using the function arguments passing in the array and print the sum of last two
//number

function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
    
}
let result = sum(array);
console.log(result);
let lastTwo = array.slice(-2);
let result2 = sum(lastTwo);
 console.log(result2);