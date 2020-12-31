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
        <a href={info.canonicalVolumeLink} className="title" target="_blank">
          {info.title}
        </a>
        <p className="info">
          <span>{info.publishedDate}</span>
          {" | "}
          <span>{info.pageCount} pages</span>
        </p>
        <p className="authors">
          By{" "}
          {info.authors &&
            info.authors.map((author, i) => (
              <span key={i}>
                {author}
                {i !== info.authors.length - 1 && ", "}
              </span>
            ))}
        </p>
        <p className="publisher">{info.publisher && info.publisher}</p>
        <p className="categories">
          {info.categories &&
            info.categories.map((category, i) => (
              <span key={i}>{category}</span>
            ))}
        </p>
        <p className="description">
          {info.description && truncateDesc(info.description)}
        </p>

        {info.previewLink && (
          <a target="_blank" href={info.previewLink}>
            Preview
          </a>
        )}
      </div>
    </div>
  );
};

export default BookCard;
