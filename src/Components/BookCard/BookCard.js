import React from "react";

const BookCard = ({ data }) => {
  return data.map((item) => (
    <div className="card">
      <img
        className="thumbnail"
        src={
          item.volumeInfo.hasOwnProperty("imageLinks")
            ? item.volumeInfo.imageLinks.thumbnail
            : null
        }
      />
      <div>
        <p className="title">{item.volumeInfo.title}</p>
        <p className="info">
          <span>{item.volumeInfo.publishedDate}</span>
          {" | "}
          <span>{item.volumeInfo.pageCount} pages</span>
        </p>
        <p className="authors">
          Authors:{" "}
          {item.volumeInfo.authors.map((author) => (
            <span>{author} </span>
          ))}
        </p>
        <p className="description">{item.volumeInfo.description}</p>
      </div>
    </div>
  ));
};

export default BookCard;
