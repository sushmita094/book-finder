import React from "react";

import "./styles.scss";

const BookCard = ({ item }) => {
  const truncateDesc = (desc) =>
    desc.length > 100 ? desc.substring(0, 150).concat("...") : desc;

  const info = item.volumeInfo;

  return (
    <div className="card" key={item.id}>
      <img
        className="thumbnail"
        src={
          info.hasOwnProperty("imageLinks") ? info.imageLinks.thumbnail : null
        }
        alt="book thumbnail"
      />
      <div>
        <p className="title">{info.title}</p>
        <p className="info">
          <span>{info.publishedDate}</span>
          {" | "}
          <span>{info.pageCount} pages</span>
        </p>
        <p className="authors">
          {info.authors &&
            info.authors.map((author, i) => (
              <span key={i}>
                {author}
                {i !== info.authors.length && ", "}
              </span>
            ))}
        </p>
        <p className="description">
          {info.description && truncateDesc(info.description)}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
