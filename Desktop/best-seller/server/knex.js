const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "taesukim",
    database: "books",
  },
});

module.exports = db;
