// // function sayHello() {
// //     return "Hello World!";
// // }

// // console.log(sayHello());


// function sayHello() {
//     return "Hello world";
// }

// let a = sayHello();
// let b = sayHello();
// let c = sayHello();

// console.log(a);
// console.log(b);
// console.log(c);

// function sayHello() {
//     for (let i = 0; i < 100; i++) {
//         console.log("Hello world");
//     }
// }

// sayHello();

//to convert farenit to celcius


// function farenheitToCelsius(farenheit) {
//     return (farenheit - 32) * 5 / 9;
// }

// let farenheit = 100;
// let celsius = farenheitToCelsius(farenheit);
// console.log(celsius + "°C");


function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

let celsius = 100;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(fahrenheit + "°F");