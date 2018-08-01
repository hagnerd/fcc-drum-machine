import React from "react";
import { render } from "react-testing-library";

import App from "../App";

test("should render without failing", () => {
  render(<App />);
});

/* Test for IDs */
// drum-machine
test("should rend an element with the id drum-machine", () => {
  const { container } = render(<App />);
  const drumMachine = container.querySelectorAll("#drum-machine");
  expect(drumMachine.length).toEqual(1);
});

// display
test("should render an element with the id display", () => {
  const { container } = render(<App />);
  const display = container.querySelectorAll("#display");
  expect(display.length).toEqual(1);
});
// ID of Q-C for each audio element that matches its parents text

// Test for classes
// drum-pad (9)
test("should render 9 elements with the class drum-pad", () => {
  const { container } = render(<App />);
  const drumPad = container.querySelectorAll(".drum-pad");
  expect(drumPad.length).toEqual(9);
});
// clip (9) => on <audio />
test("should render 9 elements with the class clip", () => {
  const { container } = render(<App />);
  const clips = container.querySelectorAll(".clip");
  expect(clips.length).toEqual(9);
});
