import React, { useState, useEffect } from "react";
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
        <button>Reviews</button>
      </div>
    );
  });
}
