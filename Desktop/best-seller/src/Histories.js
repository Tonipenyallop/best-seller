import React from "react";

export default function Histories({ books, input }) {
  return (
    <div>
      {books
        .filter((book) => book.title.includes(input))
        .map((book, idx) => (
          <div key={idx}>
            <div>Title : {book.title}</div>
            <div>Author : {book.author}</div>
            <div>Description : {book.description}</div>
            <br></br>
          </div>
        ))}
    </div>
  );
}
