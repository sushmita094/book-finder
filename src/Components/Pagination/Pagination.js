import React from "react";
import classnames from "classnames";

import "./styles.scss";

const Pagination = ({
  pageCountArray,
  perPage,
  handlePerPageCount,
  currentPageArray,
  currentPage,
}) => {
  return (
    <div className="pagination">
      <div>
        <button type="button" className={"button"}>
          Prev
        </button>

        {currentPageArray &&
          currentPageArray.map((item) => (
            <button
              key={item}
              type="button"
              className={classnames("button", currentPage === item && "active")}
            >
              {item}
            </button>
          ))}

        <button type="button" className={"button"}>
          Next
        </button>
      </div>

      <div className="">
        {pageCountArray &&
          pageCountArray.map((item, i) => (
            <button
              key={i}
              type="button"
              className={classnames("button", perPage === item && "active")}
              onClick={() => handlePerPageCount(item)}
            >
              {item}
            </button>
          ))}
        <span>Per page</span>
      </div>
    </div>
  );
};

export default Pagination;
