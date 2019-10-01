import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import Hiring from "./Hiring";
import NotHiring from "./NotHiring";

export class Library extends Component {
  static defaultProps = {
    books: [{ title: "War and Peace", author: "Leo Tolstoy", pages: "1,400" }]
  };
  state = {
    open: true,
    freeBookmark: true,
    hiring: false
  };

  toggleOpenClose = () => {
    this.setState(previousState => ({
      open: !previousState.open
    }));
  };
  render() {
    const { books } = this.props;
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        <h1>The library is {this.state.open ? "open" : "close"} today</h1>
        <button onClick={this.toggleOpenClose}>Change</button>
        {books.map((book, i) => (
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
            freeBookmark={this.state.freeBookmark}
          />
        ))}
      </div>
    );
  }
}

//good for debugging
Library.propTypes = {
  books: PropTypes.array
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookmark: PropTypes.bool
};

export default Library;
