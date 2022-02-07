const fs = require("fs");
(async () => {
  const books = await JSON.parse(fs.readFileSync("data/books.json"));
  console.log("hehe");

  //   console.log(books.results);
  console.log(books.results.length);
})();
