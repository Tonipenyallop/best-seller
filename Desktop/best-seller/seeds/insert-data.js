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
      let books = await JSON.parse(fs.readFileSync("data/books.json"));
      console.log("SEEDING");
      books = books.results;

      for (let idx in books) {
        // const book = books[idx];
        // const title = book.title;
        // const description = book.description;
        // const author = book.author;
        // const rank = book["ranks_history"][0]
        //   ? book["ranks_history"][0]["rank"]
        //   : 0;
        const book = books[idx];
        const title = book.title ? book.title : "No value";
        const description = book.description ? book.description : "No value";
        const author = book.author ? book.author : "No value";
        let rank;
        if (book["ranks_history"].length !== 0) {
          rank = book["ranks_history"][0]
            ? book["ranks_history"][0]["rank"]
            : 0;
        } else rank = 0;
        const result = {
          title: title,
          description: description,
          author: author,
          rank: rank,
        };
        arr.push(result);
        console.log("lpkpkpk");
        console.log(result);
      }
    } catch (err) {
      console.error("Error was detected" + err);
    }
  };

  return knex("books")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("books").insert(arr);
    });
};
