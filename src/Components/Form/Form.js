import React from "react";

import DropdownInput from "../DropdownInput/DropdownInput";

import { sortOptions, printOptions } from "../../Constants/filters";

import "./styles.scss";

const Form = ({
  query,
  handleInput,
  handleFilters,
  handleFormSubmit,
  sortBy,
  printType,
}) => {
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
          selectedOption={sortBy}
        />

        <DropdownInput
          buttonText="Print type"
          data={printOptions}
          handleFilters={handleFilters}
          selectedOption={printType}
        />

        <label htmlFor="downloadFormat" className="downloadSelector">
          <input
            type="checkbox"
            id="downloadFormat"
            name="downloadFormat"
            value="Bike"
          />
          <span className="customCheckbox" />
          Downloadable as EPUB
        </label>
        <br></br>
      </div>
    </form>
  );
};

export default Form;
