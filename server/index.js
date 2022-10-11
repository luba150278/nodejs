import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html; charset=UTF-8 " }); //тип файла
  if (req.url === "/" || req.url === "/home") {
    res.end("<h1>Home page</h1>");
  } 
  else if (req.url === "/about") {
    res.end("<h1>About page</h1>");
  } else if (req.url === "/users") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify([{ id: 1, name: "John" }]));
  } else {
    res.end("<h1>Page not found</h1>");
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`listen on PORT ${PORT}`);
});
