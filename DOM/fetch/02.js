// async fetch in the javascrpit is a modern way to make network requests and handle responses. 
// It is built on top of Promises and provides a more readable and  concise syntax compared to older methods like XMLHttpRequest.

// const fs = require("fs").promises;

// async function loadText(file) {
//   try {
//     const data = await fs.readFile(file, "utf8");
//     console.log("File Content:\n", data);
//   } catch (error) {
//     console.error("Error reading file:", error.message);
//   }
// }

// loadText("01.txt");

c
const fs = require("fs").promises;

async function loadText(file) {
  try {
    const data1 = await fs.readFile("02.txt", "utf8");

    await new Promise(resolve => setTimeout(resolve, 3000));

    console.log("File Content:\n", data1);

    const data2 = await fs.readFile("01.txt", "utf8");

    console.log("File Content:\n", data2);

  } catch (error) {
    console.error("Error reading file:", error.message);
  }
}

loadText();


