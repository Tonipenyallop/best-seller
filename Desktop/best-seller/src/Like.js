import React from "react";

export default function Like({ title, author, description, likes }) {
  return (
    <div>
      <div>Title : {title}</div>
      <div>Author : {author}</div>
      <div>Description : {description}</div>
      <div className="like">Likes : {likes}</div>
    </div>
  );
}
