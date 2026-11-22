//to create a set for letter
// set: A collection fo unique values that are normally found and used in arrays

const letter = new Set(["a", "b", "c", "c", "d", "e"]);
console.log (letter);

letter.add("f")
console.log(letter);

letter.delete("a")
console.log(letter);

//letter ahs checks the letter  in the set
letter.has("b")
console.log(letter);

//to clear the letter in the set
 letter.clear();
console.log(letter);

//to get the size of the letter in the set
console.log(letter.size);

//map meanssimple dictionary in the js and it is a cllection ofthe key in value pair.

name: "John"
// key: name
//value: John