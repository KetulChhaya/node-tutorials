const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === "/") {
    res.end("Welcome to the Homepage");
  } else if (req.url === "/about") {
    res.end("Welcome to the About Page");
  } else {
    // res.write("Welcome to the Node Server");
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back to HomePage</a>
    `);
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Listening to port number 5000");
});
