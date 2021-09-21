import React from "react";
import classnames from "classnames";

import caretIcon from "../../Assets/caret-down.svg";

import "./styles.scss";

const DropdownInput = ({ buttonText, data, handleFilters, selectedOption }) => {
  let selectedName = "Select";
  if (selectedOption) {
    // console.log(data.options);
    selectedName = data.options.find((item) => item.id === selectedOption).name;
  }

  return (
    <div className="dropdown">
      <button className="dropdownButton" type="button">
        {buttonText} <span className="name">{selectedName}</span>
        <img className="caret" src={caretIcon} alt="open dropdown" />
      </button>

      <div className={"dropdownWrapper"}>
        {data &&
          data.options.map((option) => (
            <button
              key={option.id}
              type="button"
              className={classnames(
                "item",
                option.id === selectedOption && "itemSelected"
              )}
              onClick={() => handleFilters(data.title, option.id)}
            >
              {option.name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default DropdownInput;
