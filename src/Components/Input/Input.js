import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (target) => {
    this.setState({ value: target.value });
  };

  render() {
    const { inputType, labelText } = this.props;
    return (
      <div className="inputWrapper">
        <label className="label">{labelText}:</label>
        <input
          type={inputType}
          placeholder={labelText}
          value={this.state.value}
          onChange={(e) => this.handleChange(e.target)}
        />
      </div>
    );
  }
}

export default Input;
