import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "../SearchBar";

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchBar></SearchBar>, div);
});

// it("render input correctly", () => {
//   const { getByTestId } = render(<SearchBar></SearchBar>);
//   getByTestId('input')
// });
