import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
function App() {
  const [books, setBooks] = useState([]);
  const [rankings, setRankings] = useState([]);

  // const reqBooks = () => {
  //   axios({
  //     method: "get",
  //     url: "http://localhost:9999/api/books",
  //   })
  //     .then((res) => {
  //       console.log(res.data);
  //       return setBooks(res.data);
  //     })
  //     .catch((err) => console.error(`axios get error ${err}`));
  // };
  const reqRankings = () => {
    axios({
      method: "get",
      url: "http://localhost:9999/api/rankings",
    })
      .then((res) => {
        console.log("jejejej");
        console.log(res.data);
        return setRankings(res.data);
      })
      .catch((err) => console.error(`axios get err ${err}`));
  };

  useEffect(() => {
    // reqBooks();
    reqRankings();
  }, []);

  return (
    <div>
      <h1>Best Sellers</h1>
      {/* {books.map((book, idx) => (
        <div key={idx}>
          <img
            src={book.book_image}
            alt="book img"
            onClick={() => {
              console.log("clicked");
            }}
          ></img>

          <div>Title : {book.title}</div>
          <div>Author : {book.author}</div>
          <div>Description : {book.description}</div>

          <div>Rank :{book.rank}</div>
          <div>Rank last week : {book.rank_last_week}</div>
        </div>
      ))} */}

      {rankings.map((rank, idx) => {
        return (
          <div key={idx}>
            <img src={rank["url"]}></img>
            <div> Title: {rank.title}</div>
            <div> Author: {rank.author}</div>
            <div> Description: {rank.description}</div>
            <div> Rank: {rank.rank}</div>
            <div> Rank last week: {rank.rank_last_week}</div>
          </div>
        );
      })}

      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
