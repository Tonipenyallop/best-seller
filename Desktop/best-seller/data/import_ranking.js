const fs = require("fs");
const db = require("../server/knex");
(async () => {
  try {
    let rankings = await JSON.parse(fs.readFileSync("data/ranking.json"));
    console.log("rankings");
    console.log(db.select().from("rankings"));
    rankings = rankings.results.books;

    for (let idx in rankings) {
      const book = rankings[idx];
      const title = book.title;
      const description = book.description;
      const author = book.author;
      const url = book.book_image;
      const rank = book.rank;
      const rank_last_week = book.rank_last_week;

      const result = await db("rankings").insert({
        title,
        description,
        author,
        url,
        rank,
        rank_last_week,
      });
      console.log(result);
    }
  } catch (err) {
    console.error("Error was detected " + err);
  }
})();
