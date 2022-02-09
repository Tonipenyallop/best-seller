const express = require("express");
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const app = express();
const db = require("../server/knex");
const key = "SlOsacbQTdULdbFeVXvA22C0xuO8kFva";
// const a = require("../data/import");
// const rankings = require("../data/import_ranking");

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/api/books", async (_, res) => {
  try {
    const books = await db.select().from("books");
    res.json(books);
  } catch (err) {
    console.error(`Error in api/books ${err}`);
  }
});

app.get("/api/rankings", async (_, res) => {
  try {
    const rankings = await db.select().from("rankings");
    res.json(rankings);
  } catch (err) {
    console.error(`Error in api/rankings ${err}`);
  }
});

module.exports = app;

//App ID='a4a544a5-f866-4c3e-ac59-ad3c3359596a'
//secret='qEQ1DpNyhS7cE3EN'
//key='SlOsacbQTdULdbFeVXvA22C0xuO8kFva'
