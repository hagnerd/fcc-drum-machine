import React from "react";
import { render, fireEvent } from "react-testing-library";

import DrumPad from "../drum-pad";

const propFac = props => ({
  id: "T",
  src: "https://freesound.org/data/previews/344/344761_1676145-lq.mp3",
  triggerSound: jest.fn(),
  ...props
});

const dProps = propFac();

test("should render without crashing", () => {
  render(<DrumPad {...dProps} />);
});

test("should render the proper display text", () => {
  const { getByText } = render(<DrumPad {...dProps} />);
  expect(getByText("T")).toBeTruthy();
});

test("should render a button with the class drum-pad", () => {
  const { container } = render(<DrumPad {...dProps} />);
  const btn = container.querySelectorAll("button");
  const dPad = container.querySelectorAll(".drum-pad");
  expect(btn.length).toEqual(1);
  expect(dPad.length).toEqual(1);
});

test("should render an audio component with the class clip, and an ID that is the same as the parent elements inner text", () => {
  const { container } = render(<DrumPad {...dProps} />);
  const audio = container.querySelectorAll("audio");
  const clip = container.querySelectorAll(".clip");

  expect(audio.length).toEqual(1);
  expect(clip.length).toEqual(1);
});

test("should fire function when clicked", () => {
  const { getByText } = render(<DrumPad {...dProps} />);
  fireEvent.click(getByText("T"));

  expect(dProps.triggerSound).toHaveBeenCalledTimes(1);
  expect(dProps.triggerSound).toHaveBeenCalledWith(dProps.id);
});
