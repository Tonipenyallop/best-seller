/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const fs = require("fs");
const db = require("../server/knex");
exports.seed = function (knex) {
  // Deletes ALL existing entries
  let arr = [];
  async () => {
    try {
      let rankings = await JSON.parse(fs.readFileSync("data/ranking.json"));
      console.log("rankings");
      rankings = rankings.results.books;

      for (let idx in rankings) {
        const book = rankings[idx];
        const title = book.title;
        const description = book.description;
        const author = book.author;
        const url = book.book_image;
        const rank = book.rank;
        const rankLastWeek = book.rank_last_week;

        //   let rank;
        //   if (book["ranks_history"].length !== 0) {
        //     rank = book["ranks_history"][0] ? book["ranks_history"][0]["rank"] : 0;
        //   } else rank = 0;

        const result = await db("rankings").insert({
          title,
          description,
          author,
          url,
          rank,
          rankLastWeek,
        });
      }
    } catch (err) {
      console.error("Error was detected" + err);
    }
  };

  return knex("rankings")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("rankings").insert(arr);
    });
};
