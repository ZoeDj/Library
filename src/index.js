import React from "react";
import { render } from "react-dom";
import Library from "./Library";

let bookList = [
  { title: "Breakfast of Champions", author: "Kurt Vonnegut", pages: "320" },
  { title: "Fahrenheit 451", author: "Ray Bradbury", pages: "158" },
  { title: "Lolita", author: "Vladimir Nabokov", pages: "336" }
];

render(
  <Library books={bookList} />,

  document.getElementById("root")
);

export default Library;
