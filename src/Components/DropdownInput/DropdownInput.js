import React from "react";

import caretIcon from "../../Assets/caret-down.svg";

import "./styles.scss";

const DropdownInput = ({ buttonText, data, handleFilters }) => {
  return (
    <div className="dropdown">
      <button className="dropdownButton" type="button">
        {buttonText}
        <img className="caret" src={caretIcon} alt="open dropdown" />
      </button>

      <div className={"dropdownWrapper"}>
        {data &&
          data.options.map((option) => (
            <button
              key={option.id}
              type="button"
              className="item"
              onClick={() => handleFilters(data.title, option.label)}
            >
              {option.name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default DropdownInput;
