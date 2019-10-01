import React, { Component } from "react";
import { render } from "react-dom";

let bookList = [
  { title: "Breakfast of Champions", author: "Kurt Vonnegut", pages: "320" },
  { title: "Fahrenheit 451", author: "Ray Bradbury", pages: "158" },
  { title: "Lolita", author: "Carls Bukovski", pages: "336" }
];

//compose components
const Book = ({ title, author, pages, freeBookmark }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p> Pages: {pages} pages</p>
      <p>Free Bookmark Today: {freeBookmark ? "yes!" : "no!"} </p>
    </section>
  );
};

const Hiring = () => (
  <div>
    <p>The library is hiring! Go to www.library.com/jobs for more.</p>
  </div>
);
const NotHiring = () => (
  <div>
    <p>The library is not hiring! Check back later for more info.</p>
  </div>
);
class Library extends Component {
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

render(
  <Library books={bookList} />,

  document.getElementById("root")
);
