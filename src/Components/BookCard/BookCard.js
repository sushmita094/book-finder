import React from "react";

import "./styles.scss";

const BookCard = ({ item }) => {
  // const truncateDesc = (desc) =>
  //   desc.length > 100 ? desc.substring(0, 150).concat("...") : desc;

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
        <a
          href={info.canonicalVolumeLink}
          className="title"
          target="_blank"
          rel="noopener noreferrer"
        >
          {info.title}
        </a>

        <p className="info">
          <span>
            {info.authors &&
              info.authors.map((author, i) => (
                <span key={i}>
                  {author}
                  {i !== info.authors.length - 1 && ", "}
                </span>
              ))}
          </span>{" "}
          <span>|</span> <span>{info.publishedDate}</span>
        </p>

        <p className="publisher">Published by {info.publisher}</p>
        <p className="pages">{info.pageCount} pages</p>
        <p className="categories">
          {info.categories &&
            info.categories.map((category, i) => (
              <span key={i}>{category}</span>
            ))}
        </p>

        {/* <p className="description">
          {info.description && truncateDesc(info.description)}
        </p> */}

        {info.previewLink && (
          <a
            className="previewLink"
            target="_blank"
            href={info.previewLink}
            rel="noopener noreferrer"
          >
            <div className="previewButton">Preview</div>
          </a>
        )}
      </div>
    </div>
  );
};

export default BookCard;
