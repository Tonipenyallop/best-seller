import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Dropdown from "react-dropdown";
import Ranking from "./Ranking";
import FilteredImage from "./FilteredImage";
import Histories from "./Histories";
import LikesOrder from "./LikesOrder";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "./redux/bookSlice";

function App() {
  const [books, setBooks] = useState([]);
  const [rankings, setRankings] = useState([]);
  const [searchedTitle, setSearchedTitle] = useState("");

  const [input, setInput] = useState("");
  const [sortedBooks, setSortedBetBooks] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const reqBooks = () => {
    axios({
      method: "get",
      url: "http://localhost:9999/api/books",
    })
      .then((res) => {
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

      <button onClick={() => dispatch(toggle("rankings"))}>Main</button>
      <button onClick={() => dispatch(toggle("histories"))}>History</button>
      <button onClick={() => dispatch(toggle("likes"))}>Likes</button>

      {book.mode === "rankings" ? (
        <div>
          <Dropdown
            className="dropdown"
            options={rankings.map((rank) => {
              return rank.title;
            })}
            onChange={(e) => {
              console.log(rankings);
              setSearchedTitle(e.value);
              dispatch(toggle("filter"));
            }}
          />
          <Ranking rankings={rankings} />
        </div>
      ) : book.mode === "filter" ? (
        <FilteredImage searchedTitle={searchedTitle} rankings={rankings} />
      ) : book.mode === "histories" ? (
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
