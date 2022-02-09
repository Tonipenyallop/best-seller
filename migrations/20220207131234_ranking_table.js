/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("rankings", (table) => {
    table.increments().index;
    table.text("title");
    table.text("description");
    table.text("author");
    table.text("url");
    table.integer("rank");
    table.integer("rank_last_week");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
