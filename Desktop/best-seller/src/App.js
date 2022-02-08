import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import MainBar from "./MainBar";
import HistoryButton from "./HistoryButton";
import Dropdown from "react-dropdown";
import Ranking from "./Ranking";
import FilteredImage from "./FilteredImage";
import Histories from "./Histories";

function App() {
  const [books, setBooks] = useState([]);
  const [rankings, setRankings] = useState([]);
  const [searchedTitle, setSearchedTitle] = useState("");
  const [displayMode, setDisplayMode] = useState("rankings");
  const [input, setInput] = useState("");

  const reqBooks = () => {
    axios({
      method: "get",
      url: "http://localhost:9999/api/books",
    })
      .then((res) => {
        console.log(res.data);
        return setBooks(res.data);
      })
      .catch((err) => console.error(`axios get error ${err}`));
  };
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
    reqBooks();
    reqRankings();
  }, []);

  return (
    <div>
      <h1>Best Sellers</h1>
      <MainBar setDisplayMode={setDisplayMode} />
      <HistoryButton setDisplayMode={setDisplayMode} />
      <button onClick={() => setDisplayMode("likes")}>Likes</button>

      {displayMode === "rankings" ? (
        <div>
          <Dropdown
            className="dropdown"
            options={rankings
              .map((rank) => rank.title)
              .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))}
            onChange={(e) => {
              setSearchedTitle(e.value);
              setDisplayMode("filter");
            }}
          />
          <Ranking rankings={rankings} />
        </div>
      ) : displayMode === "filter" ? (
        <FilteredImage searchedTitle={searchedTitle} rankings={rankings} />
      ) : displayMode === "histories" ? (
        <div>
          <input
            type="text"
            placeholder="Book Title here..."
            onChange={(e) => {
              setInput(e.target.value.toUpperCase());
            }}
          />
          <Histories books={books} input={input} />
        </div>
      ) : (
        "likes mode"
      )}
    </div>
  );
}

export default App;
