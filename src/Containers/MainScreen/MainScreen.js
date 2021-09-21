import React, { Component } from "react";

import Container from "./../../Components/Container/Container";
import BookCard from "../../Components/BookCard/BookCard";
import Form from "../../Components/Form/Form";
import Pagination from "../../Components/Pagination/Pagination";

import {
  sortOptions,
  printOptions,
  filterOptions,
  perPageOptions,
} from "../../Constants/filters";

// import mockData from "../../Mocks/mockData";

const axios = require("axios");

const currentPageArray = [1, 2, 3];

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      sortBy: 1,
      printType: 1,
      filterOption: null,
      data: null,
      perPage: 1,
      currentPage: 1,
      downloadFormat: null,
      isFetching: false,
      totalItems: null,
    };
  }

  handleInput = (value) => {
    this.setState({
      query: value,
    });
  };

  handleFilters = (label, value) => {
    this.setState(
      {
        [label]: value,
      },
      () => {
        this.callApi();
      }
    );
  };

  handleCurrentPage = (value) => {
    this.setState(
      {
        currentPage: value,
      },
      () => {
        this.callApi();
      }
    );
  };

  handlePrevNextPage = (value) => {
    if (value === "prev") {
      this.setState(
        (prevState) => ({
          currentPage: prevState.currentPage - 1,
        }),
        () => {
          this.callApi();
        }
      );
    } else {
      this.setState(
        (prevState) => ({
          currentPage: prevState.currentPage + 1,
        }),
        () => {
          this.callApi();
        }
      );
    }
  };

  handleDownloadFormat = () => {
    this.setState(
      (prevState) => ({
        downloadFormat: prevState.downloadFormat ? null : "epub",
      }),
      () => {
        this.callApi();
      }
    );
  };

  callApi = () => {
    this.setState({
      isFetching: true,
    });
    let {
      query: queryValue,
      sortBy,
      printType,
      filterOption,
      perPage,
      currentPage,
      downloadFormat,
    } = this.state;
    let currentComponent = this;

    let requestStr = `https://www.googleapis.com/books/v1/volumes?q=${queryValue}`;

    if (sortBy) {
      let selected = sortOptions.options.find(
        (item) => item.id === sortBy
      ).label;
      requestStr = requestStr.concat(`&orderBy=${selected}`);
    }

    if (printType) {
      let selected = printOptions.options.find(
        (item) => item.id === printType
      ).label;
      requestStr = requestStr.concat(`&printType=${selected}`);
    }

    if (filterOption) {
      let selected = filterOptions.options.find(
        (item) => item.id === filterOption
      ).label;
      requestStr = requestStr.concat(`&filter=${selected}`);
    }

    if (perPage) {
      let selected = perPageOptions.options.find(
        (item) => item.id === perPage
      ).label;
      requestStr = requestStr.concat(`&maxResults=${selected}`);
    }

    if (currentPage) {
      let startIndex = perPage * (currentPage - 1);
      requestStr = requestStr.concat(`&startIndex=${startIndex}`);
    }

    if (downloadFormat) {
      requestStr = requestStr.concat("&download=epub");
    }

    axios
      .get(requestStr)
      .then(function (response) {
        console.log(response);
        currentComponent.setState({
          data: response.data.items,
          totalItems: response.data.totalItems,
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(() => {
        this.setState({
          isFetching: false,
        });
      });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.callApi();
  };

  render() {
    const {
      data,
      query,
      sortBy,
      printType,
      perPage,
      currentPage,
      filterOption,
      downloadFormat,
      isFetching,
      totalItems,
    } = this.state;

    return (
      <Container containerClass="mainScreen">
        <h1 className="heading">Bookipedia</h1>
        <div className="searchBarWrapper">
          <div className="searchBar">
            <Form
              query={query}
              handleInput={this.handleInput}
              handleFilters={this.handleFilters}
              handleFormSubmit={this.handleFormSubmit}
              sortBy={sortBy}
              printType={printType}
              filterOption={filterOption}
              perPageOption={perPage}
              downloadFormat={downloadFormat}
              handleDownloadFormat={this.handleDownloadFormat}
            />
          </div>
        </div>

        {isFetching ? (
          <div className="loader-wrapper">
            <div className="loader">
              <span className="dot dot-1"></span>
              <span className="dot dot-2"></span>
              <span className="dot dot-3"></span>
            </div>
          </div>
        ) : totalItems === 0 ? (
          <div>No results found</div>
        ) : (
          <div className="results">
            {data && data.map((item) => <BookCard item={item} key={item.id} />)}
          </div>
        )}

        {data && (
          <Pagination
            currentPageArray={currentPageArray}
            currentPage={currentPage}
            handleCurrentPage={this.handleCurrentPage}
            handlePrevNextPage={this.handlePrevNextPage}
          />
        )}
      </Container>
    );
  }
}

export default MainScreen;
