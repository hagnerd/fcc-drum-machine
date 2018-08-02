import React from "react";
import { render } from "react-testing-library";

import Display from "../display";

const propFac = props => ({
  text: "testing",
  ...props
});

const dProps = propFac();

test("should render without crashing", () => {
  render(<Display {...dProps} />);
});

test("should render with the proper text", () => {
  const { getByText } = render(<Display {...dProps} />);
  expect(getByText(dProps.text)).toBeTruthy();
});
