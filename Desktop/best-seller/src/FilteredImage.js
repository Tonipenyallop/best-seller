import React from "react";

export default function FilteredImage({ searchedTitle, rankings }) {
  console.log(rankings);
  const filteredImg = rankings.filter((rank) => rank.title === searchedTitle);
  return (
    <div>
      {filteredImg.map((img, idx) => (
        <div key={idx}>
          <img src={img["url"]}></img>
          <div> Title: {img.title}</div>
          <div> Author: {img.author}</div>
          <div> Description: {img.description}</div>
        </div>
      ))}
    </div>
  );
}
