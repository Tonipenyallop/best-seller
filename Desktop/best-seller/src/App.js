import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [ranking, setRanking] = useState([]);
  useEffect(async () => {
    const fetchedBooks = await axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=SlOsacbQTdULdbFeVXvA22C0xuO8kFva`
    );
    const data = await fetchedBooks["data"]["results"]["books"];
    console.log(data);

    const a = await axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?price=5&api-key=SlOsacbQTdULdbFeVXvA22C0xuO8kFva`
    );
    const b = a["data"]["results"].filter(
      (book) => book.author === "Diana Gabaldon"
    );
    console.log(a);

    console.log(b);
    setRanking(data);
  }, []);

  return (
    <div>
      <h1>Best Sellers</h1>
      {ranking.map((book, idx) => (
        <div key={idx}>
          <img src={book.book_image} alt="book img"></img>

          <div>Title : {book.title}</div>
          <div>Author : {book.author}</div>
          <div>Description : {book.description}</div>

          <div>Rank :{book.rank}</div>
          <div>Rank last week : {book.rank_last_week}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
