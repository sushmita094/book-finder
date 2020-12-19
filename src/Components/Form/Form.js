import React from "react";

import DropdownInput from "../DropdownInput/DropdownInput";

import "./styles.scss";

const sortOptions = {
  title: "sortBy",
  options: [
    {
      id: 1,
      name: "Relevance",
      label: "relevance",
    },
    {
      id: 2,
      name: "Newest",
      label: "newest",
    },
  ],
};

const printOptions = {
  title: "printType",
  options: [
    {
      id: 1,
      name: "All",
      label: "all",
    },
    {
      id: 2,
      name: "Books",
      label: "books",
    },
    {
      id: 3,
      name: "Magazines",
      label: "magazines",
    },
  ],
};

const Form = ({ query, handleInput, handleFilters, handleFormSubmit }) => {
  return (
    <form>
      <input
        value={query}
        onChange={(e) => handleInput(e.target.value)}
        className="mainInput"
        placeholder="Search"
        required
      />

      <button
        className="searchButton"
        type="button"
        onClick={(e) => handleFormSubmit(e)}
      >
        Search
      </button>

      <div className="optionsWrapper">
        <DropdownInput
          buttonText="Sort by"
          data={sortOptions}
          handleFilters={handleFilters}
        />

        <DropdownInput
          buttonText="Print type"
          data={printOptions}
          handleFilters={handleFilters}
        />

        {/* <div className="dropdown">
          <button className="dropdownButton" type="button">
            Filter
          </button>

          <div className={"dropdownWrapper"}>
            <div>Free Ebooks</div>
            <div>Paid Ebooks</div>
          </div>
        </div> */}
      </div>
    </form>
  );
};

export default Form;
