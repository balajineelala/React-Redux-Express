const express = require("express");
const users = require("./mocks/users.json");
const articles = require("./mocks/articles.json");

const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("Hello World!"));

// app.get("/api/users", function (req, res) {
//   const users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "steve" },
//     { id: 3, name: "crane" },
//   ];
//   res.json(users);
// });

app.get("/api/users", function (req, res) {
  res.json(users);
});
app.get("/api/articles", function (req, res) {
  res.json(articles);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
