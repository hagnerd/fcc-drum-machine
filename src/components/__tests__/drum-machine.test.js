import React from "react";
import { render } from "react-testing-library";
import DrumMachine from "../drum-machine";

test("should render without crashing", () => {
  render(<DrumMachine render={() => <div />} />);
});
