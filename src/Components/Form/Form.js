import React from "react";

import DropdownInput from "../DropdownInput/DropdownInput";

import {
  sortOptions,
  printOptions,
  filterOptions,
} from "../../Constants/filters";

import checkIcon from "../../Assets/check.svg";

import "./styles.scss";

const Form = ({
  query,
  handleInput,
  handleFilters,
  handleFormSubmit,
  sortBy,
  printType,
  filterOption,
  downloadFormat,
  handleDownloadFormat,
}) => {
  return (
    <form>
      <div className="inputButtonWrapper">
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
          disabled={query.length === 0}
        >
          Search
        </button>
      </div>

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

        <DropdownInput
          buttonText="Filter by"
          data={filterOptions}
          handleFilters={handleFilters}
          selectedOption={filterOption}
        />

        <label htmlFor="downloadFormat" className="downloadSelector">
          <input
            type="checkbox"
            id="downloadFormat"
            name="downloadFormat"
            value="Bike"
            checked={downloadFormat}
            onClick={handleDownloadFormat}
          />
          <span className="customCheckbox">
            <img src={checkIcon} alt="downloadable" />
          </span>
          Downloadable as EPUB
        </label>
        <br></br>
      </div>
    </form>
  );
};

export default Form;
