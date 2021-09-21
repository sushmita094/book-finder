import React from "react";
import classnames from "classnames";

import "./styles.scss";

const Pagination = ({
  currentPageArray,
  currentPage,
  handleCurrentPage,
  handlePrevNextPage,
}) => {
  return (
    <div className="pagination">
      <div>
        <button
          type="button"
          className={"button"}
          onClick={() => handlePrevNextPage("prev")}
        >
          Prev
        </button>

        {currentPageArray &&
          currentPageArray.map((item) => (
            <button
              key={item}
              type="button"
              className={classnames("button", currentPage === item && "active")}
              onClick={() => handleCurrentPage(item)}
            >
              {item}
            </button>
          ))}

        <button
          type="button"
          className={"button"}
          onClick={() => handlePrevNextPage("next")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
