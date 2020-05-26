import React, { Component } from "react";
import Container from "./../../Components/Container/Container";

const axios = require("axios");

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      data: [],
    };
  }

  handleInput = (target) => {
    this.setState({
      inputValue: target.value,
    });
  };

  handleBtnClick = () => {
    let queryValue = this.state.inputValue;
    let currentComponent = this;

    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${queryValue}`)
      .then(function (response) {
        console.log(response);
        console.log(response.data.items);
        response.data.items.map((item) => console.log(item.volumeInfo));
        currentComponent.setState({
          data: response.data.items,
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  render() {
    return (
      <Container containerClass="mainScreen">
        <h1 className="heading">The Book Finder</h1>
        <div className="searchBarWrapper">
          <div className="searchBar">
            <input
              placeholder="Search"
              onChange={(e) => this.handleInput(e.target)}
              value={this.state.inputValue}
            />
            <button onClick={() => this.handleBtnClick()}>Search</button>
          </div>
        </div>
        <div className="results">
          {this.state.data.map((item) => (
            <div className="card">
              <img
                className="thumbnail"
                src={item.volumeInfo.imageLinks.thumbnail}
              />
              <div>
                <p className="title">{item.volumeInfo.title}</p>
                <p className="info">
                  <span>{item.volumeInfo.publishedDate}</span>
                  {" | "}
                  <span>{item.volumeInfo.pageCount} pages</span>
                </p>
                <p className="authors">
                  Authors:{" "}
                  {item.volumeInfo.authors.map((author) => (
                    <span>{author}</span>
                  ))}
                </p>
                <p className="description">{item.volumeInfo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    );
  }
}

export default MainScreen;
