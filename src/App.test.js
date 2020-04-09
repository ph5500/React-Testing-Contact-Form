import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
// import { exportAllDeclaration } from "@babel/types";

test("renders App without crashing", () => {
  //AAA Arrange, Act, Assert


  // ARRANGE: Set up the "testing environment"
  // Get the DOM ready (render it)
  // Set up any test data that we want in the DOM



  render(<App />);

  // const result = render(<App />);
  // console.log(result.debug());
  // console.log(result);

  // ACT: Take the USER "action" that we want to test
  // e.g., Click the submit button
  // fill out one of the inputs
  // clear the form
  // NONE!

  // ASSERT: Test that the data or app responded the way you expected it to
  // Testing that something is visible to the user
  // Test that you got routed to a specific place
  // Test that there's a new component in the UI

  // QUERY FUNCTIONS

  // const linkElement = getByText(/add new info/i); //case INSENSITIVE
  //EXPECTATIONS
  // exportAllDeclaration(linkElement).toBeVisible();
});
