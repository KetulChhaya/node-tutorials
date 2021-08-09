const fs = require("fs");

console.log("start");
fs.readFile("./content/first.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = data;
  console.log(first);
  fs.readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log(second);
    fs.writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first},   ${second},`,
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");
