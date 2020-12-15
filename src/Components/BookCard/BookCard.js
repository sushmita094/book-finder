import React from "react";

const BookCard = ({ data }) => {
  const truncateDesc = (desc) =>
    desc.length > 100 ? desc.substring(0, 150).concat("...") : desc;

  return (
    data &&
    data.map((item) => (
      <div className="card" key={data.id}>
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
            {item.volumeInfo.authors &&
              item.volumeInfo.authors.map((author, i) => (
                <span key={i}>
                  {author}
                  {i !== item.volumeInfo.authors.length && ", "}
                </span>
              ))}
          </p>
          <p className="description">
            {truncateDesc(item.volumeInfo.description)}
          </p>
        </div>
      </div>
    ))
  );
};

export default BookCard;
