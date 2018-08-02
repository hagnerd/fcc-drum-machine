import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import Pads from "../data";

const Button = styled("button")`
  background-color: #405768;
  color: #607d97;
  grid-column-start: span 1;
  grid-row-start: span 1;
  outline: none;
  &:focus {
    border: 3px solid #f89d80;
  }
`;

const DrumPad = ({ id, triggerSound, src }) => (
  <Button className="drum-pad" onClick={() => triggerSound(id)}>
    {id}
    <audio className="clip" id={id} src={src} />
  </Button>
);

DrumPad.propTypes = {
  // The ID will be the single letter id / Button display name
  id: PropTypes.string.isRequired,
  triggerSound: PropTypes.func.isRequired,
  // The source of the audio file
  src: PropTypes.string.isRequired
};

export const DrumPadFacFn = list => ({ triggerSound }) =>
  list.map(element => (
    <DrumPad
      key={element.id}
      id={element.id}
      src={element.src}
      triggerSound={triggerSound}
    />
  ));

export const DrumPads = DrumPadFacFn(Pads);

export default DrumPad;
