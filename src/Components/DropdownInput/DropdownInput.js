import React from "react";

import "./styles.scss";

const DropdownInput = ({ buttonText, data, handleFilters }) => {
  return (
    <div className="dropdown">
      <button className="dropdownButton" type="button">
        {buttonText}
      </button>

      <div className={"dropdownWrapper"}>
        {data &&
          data.options.map((option) => (
            <button
              key={option.id}
              type="button"
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
