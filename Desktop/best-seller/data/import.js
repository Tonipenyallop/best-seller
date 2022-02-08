const fs = require("fs");
const db = require("../server/knex");
(async () => {
  try {
    let books = await JSON.parse(fs.readFileSync("data/books.json"));
    console.log("hehe");
    books = books.results;

    for (let idx in books) {
      const book = books[idx];
      const title = book.title ? book.title : "No value";
      const description = book.description ? book.description : "No value";
      const author = book.author ? book.author : "No value";
      let rank;
      if (book["ranks_history"].length !== 0) {
        rank = book["ranks_history"][0] ? book["ranks_history"][0]["rank"] : 0;
      } else rank = 0;
      const likes = Math.floor(Math.random() * 5000000) + 10000;
      console.log(likes);
      const result = await db("books").insert({
        title,
        description,
        author,
        rank,
        likes,
      });
    }
  } catch (err) {
    console.error("Error was detected jeje " + err);
  }
})();
