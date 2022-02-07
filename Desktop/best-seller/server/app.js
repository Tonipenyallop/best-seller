const express = require("express");
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");
const app = express();
const key = "SlOsacbQTdULdbFeVXvA22C0xuO8kFva";
const a = require("../data/import");

app.get("/books", async (_, res) => {
  //   console.log(a);
  res.send("afafa");
});

module.exports = app;

//App ID='a4a544a5-f866-4c3e-ac59-ad3c3359596a'
//secret='qEQ1DpNyhS7cE3EN'
//key='SlOsacbQTdULdbFeVXvA22C0xuO8kFva'
