
const fs = require("fs").promises;

async function loadText() {
  try {
    const data1 = await fs.readFile("04.txt", "utf8");
    console.log("04.txt Content:\n", data1);

    await new Promise(resolve => setTimeout(resolve, 3000));

    const data2 = await fs.readFile("05.txt", "utf8");
    console.log("05.txt Content:\n", data2);

  } catch (error) {
    console.error("Error reading file:", error.message);
  }
}

loadText();
