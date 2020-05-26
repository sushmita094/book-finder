import React, { Component } from "react";
import Input from "./../Input/Input";
import Button from "./../Button/Button";

class LoginForm extends Component {
  handleSubmit = (event) => {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form>
        <Input inputType="text" labelText="Username" />
        <Input inputType="password" labelText="Password" />
        <Button
          buttonType="submit"
          title="Login"
          handleClick={() => this.handleSubmit()}
        />
      </form>
    );
  }
}

export default LoginForm;
