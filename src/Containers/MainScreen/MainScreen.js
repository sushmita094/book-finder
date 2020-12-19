import React, { Component } from "react";

import Container from "./../../Components/Container/Container";
import BookCard from "../../Components/BookCard/BookCard";
import Form from "../../Components/Form/Form";

import mockData from "../../Mocks/mockData";

const axios = require("axios");

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      sortBy: null,
      printType: null,
      data: mockData.items,
    };
  }

  handleInput = (value) => {
    this.setState({
      query: value,
    });
  };

  handleFilters = (label, value) => {
    this.setState({
      [label]: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    let queryValue = this.state.query;
    let currentComponent = this;

    let requestStr = `https://www.googleapis.com/books/v1/volumes?q=${queryValue}`;

    if (this.state.sortBy) {
      requestStr = requestStr.concat(`&orderBy=${this.state.sortBy}`);
    }

    if (this.state.printType) {
      requestStr = requestStr.concat(`&printType=${this.state.printType}`);
    }

    axios
      .get(requestStr)
      .then(function (response) {
        console.log(response);
        currentComponent.setState({
          data: response.data.items,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { data, query } = this.state;

    return (
      <Container containerClass="mainScreen">
        <h1 className="heading">The Book Finder</h1>
        <div className="searchBarWrapper">
          <div className="searchBar">
            <Form
              query={query}
              handleInput={this.handleInput}
              handleFilters={this.handleFilters}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>
        </div>

        <div className="results">
          {data && data.map((item) => <BookCard item={item} />)}
        </div>
      </Container>
    );
  }
}

export default MainScreen;
