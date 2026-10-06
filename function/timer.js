// // // //timer function in js
// // // //setTimeOut
// // // //setInterval
// // // //clearTimeOut
// // // //claerInterval
// // // //syntax
// // // // setTimeout(function(miliiseconds))
// // // // setInterval(function(miliiseconds))

// // // //to dipplay the hello world after 10 seconds
// // // setTimeout(function() {
// // //     console.log("Hello World");
// // // }, 10000);

// //  setTimeout(function() {
// //     console.log("first");
// // }, 0);


// // setTimeout(function() {
// //     console.log("middle");
// // }, 20000);


// // setTimeout(function() {
// //     console.log("last");
// // }, 3000);

// // setInterval(function() {
// //     console.log("Hello World");
// // }, 10000);

// let count = 0;

// const intervalID = setInterval(function() {
//     console.log("Aarambha Dhakal");
//     count++;

//     if (count === 100) {
//         clearInterval(intervalID);
//     }
// }, 200);

// // //timer function in js
// // //setTimeOut
// // //setInterval
// // //clearTimeOut
// // //claerInterval
// // //syntax
// // // setTimeout(function(miliiseconds))
// // // setInterval(function(miliiseconds))

// // //to dipplay the hello world after 10 seconds
// // setTimeout(function() {
// //     console.log("Hello World");
// // }, 10000);

//  setTimeout(function() {
//     console.log("first");
// }, 0);


// setTimeout(function() {
//     console.log("middle");
// }, 20000);


// setTimeout(function() {
//     console.log("last");
// }, 3000);

// setInterval(function() {
//     console.log("Hello World");
// }, 10000);

// let count = 0;

// const intervalID = setInterval(function() {
//     console.log("Aarambha Dhakal");
//     count++;

//     if (count === 100) {
//         clearInterval(intervalID);
//     }
// }, 200);

// clearTimeout
//write the program to use the clearTimeout to stop the timer after 5 seconds

const timeout = setTimeout(function () {
  console.log("Hello World");
}, 5000);

setTimeout(function () {
  clearTimeout(timeout);
  console.log("Timer stopped");
}, 3000);