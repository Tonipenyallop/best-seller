import React from "react";

export default function LikesOrder({ sortedBooks, setIsClicked, isClicked }) {
  const temp = sortedBooks.sort((a, b) => {
    return b.likes - a.likes;
  });

  return (
    <div>
      {sortedBooks
        .sort((a, b) => {
          return b.likes - a.likes;
        })
        .map((book, idx) => (
          <div className="imgs" key={idx}>
            <div>Title : {book.title}</div>
            <div>Author : {book.author}</div>
            <div>Description : {book.description}</div>
            <div>Likes : {book.likes}</div>
            <button
              onClick={(e) => {
                setIsClicked(!isClicked);
                // parseInt(e.target.value) + 1;
              }}
            >
              {isClicked ? "Like❤️" : "Like♡"}
            </button>
            <br></br>
          </div>
        ))}
    </div>
  );
}
