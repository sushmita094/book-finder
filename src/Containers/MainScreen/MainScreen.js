import React, { Component } from "react";

import Container from "./../../Components/Container/Container";
import BookCard from "../../Components/BookCard/BookCard";
import Form from "../../Components/Form/Form";
import Pagination from "../../Components/Pagination/Pagination";

import mockData from "../../Mocks/mockData";

const axios = require("axios");

const pageCountArray = [10, 20, 30, 40];

const currentPageArray = [1, 2, 3];

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      sortBy: 1,
      printType: 1,
      data: mockData.items,
      perPage: 10,
      currentPage: 1,
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

  handlePerPageCount = (value) => {
    this.setState({
      perPage: value,
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
    const { data, query, sortBy, printType, perPage, currentPage } = this.state;

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
              sortBy={sortBy}
              printType={printType}
            />
          </div>
        </div>

        <div className="results">
          {data && data.map((item) => <BookCard item={item} />)}
        </div>

        <Pagination
          pageCountArray={pageCountArray}
          perPage={perPage}
          handlePerPageCount={this.handlePerPageCount}
          currentPageArray={currentPageArray}
          currentPage={currentPage}
        />
      </Container>
    );
  }
}

export default MainScreen;
