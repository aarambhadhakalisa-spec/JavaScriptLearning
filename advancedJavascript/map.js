//map means simply dictionary in the javascript it is a collection of the key value pair 
name: "John";
// key:name 
// value : "John"

//JSON  = JavaScript Object NOtation. It is a data format that is used to representthe data in the key value pair

// to create the map of the fruits

// const fruits = new Map()
// fruits.set("apple", 10);
// fruits.set("banana", 20);
// fruits.set("orange", 30);
// console.log(fruits);


// to create the map of the person
// const person = new Map([
//   ["name", "John"],
//   ["age", 30],
//   ["city", "New York"]
// ]);
// person.set("country", "USA");
// console.log(person);

// const person = new Map([
//   ["name", "John"],
//   ["Country", "USA"],
//   ["age", 30],
//   ["city", "New York"]
// ]);
// console.log(person.size)
// console.log(person);


// const person = new Map([
//   ["name", "John"],
//   ["Country", "USA"],
//   ["age", 30],
//   ["city", "New York"]
// ]);
// console.log(person.delete("name"));
// console.log(person);


const vegetable = new Map([
  ["name", "orange"],
  ["name2", "watermelon"],
  ["name3", "apple"],
  ["name4", "mango "]
]);
console.log(vegetable.delete("name"));
console.log(vegetable.size);
console.log(vegetable);
vegetable.set("name5", "bananna" );
console.log(vegetable);
console.log(vegetable.get("name5"));
