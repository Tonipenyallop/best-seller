import React from "react";
export default function Ranking({ rankings }) {
  return rankings.map((rank, idx) => {
    return (
      <div className="imgs" key={idx}>
        <img src={rank["url"]}></img>
        <div> Title: {rank.title}</div>
        <div> Author: {rank.author}</div>
        <div> Description: {rank.description}</div>
        <div> Rank: {rank.rank}</div>
        <div> Rank last week: {rank.rank_last_week}</div>
        <div
          onClick={(e) => {
            if (e.target.querySelector(".review"))
              e.target.querySelector(".review").className = "review2";
            else e.target.className = "review";
          }}
        >
          Reviews
          <li className="review">
            <ul>This story is amazing</ul>
            <ul>I love the character of the story</ul>
            <ul>You must read this book!!!</ul>
          </li>
        </div>
      </div>
    );
  });
}
