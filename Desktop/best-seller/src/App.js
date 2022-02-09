import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import MainBar from "./MainBar";
import HistoryButton from "./HistoryButton";
import Dropdown from "react-dropdown";
import Ranking from "./Ranking";
import FilteredImage from "./FilteredImage";
import Histories from "./Histories";
import LikesOrder from "./LikesOrder";

function App() {
  const [books, setBooks] = useState([]);
  const [rankings, setRankings] = useState([]);
  const [searchedTitle, setSearchedTitle] = useState("");
  const [displayMode, setDisplayMode] = useState("rankings");
  const [input, setInput] = useState("");
  const [sortedBooks, setSortedBetBooks] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const reqBooks = () => {
    axios({
      method: "get",
      url: "http://localhost:9999/api/books",
    })
      .then((res) => {
        console.log(res.data);
        setSortedBetBooks(res.data);
        return setBooks(res.data);
      })
      .catch((err) => console.error(`axios get error ${err}`));
  };

  const reqSortedBooks = () => {
    axios({
      method: "get",
      url: "http://localhost:9999/api/books",
    })
      .then((res) => {
        return setSortedBetBooks(res.data);
      })
      .catch((err) => console.error(`axios get err ${err}`));
  };

  const reqRankings = () => {
    axios({
      method: "get",
      url: "http://localhost:9999/api/rankings",
    })
      .then((res) => {
        return setRankings(res.data);
      })
      .catch((err) => console.error(`axios get err ${err}`));
  };

  useEffect(() => {
    reqBooks();
    reqSortedBooks();
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
            options={rankings.map((rank) => {
              return rank.title;
            })}
            onChange={(e) => {
              console.log(rankings);
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
        <LikesOrder
          sortedBooks={sortedBooks}
          setIsClicked={setIsClicked}
          isClicked={isClicked}
        />
      )}
    </div>
  );
}

export default App;
