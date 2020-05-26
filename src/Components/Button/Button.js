import React, { Component } from "react";

class Button extends Component {
  render() {
    const { buttonType, handleClick, title } = this.props;
    return (
      <button type={buttonType} onClick={handleClick}>
        {title}
      </button>
    );
  }
}

export default Button;
