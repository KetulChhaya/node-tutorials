//SYNCHRONOUS
const fs = require("fs");

const first = fs.readFileSync("./content/first.txt");
const second = fs.readFileSync("./content/second.txt", "utf-8");
console.log(first.toString(), second);

fs.writeFileSync(
  "./content/result-sync.txt",
  `Here is the Result : ${first}, ${second}`,
  { flag: "a" } //flag:a is for appending the data into the file, else it will overwrite it
);
