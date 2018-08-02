import React from "react";
import PropTypes from "prop-types";
import Pads from "../data";

const DrumPad = ({ id, triggerSound, src }) => (
  <button className="drum-pad" onClick={() => triggerSound(id)}>
    {id}
    <audio className="clip" id={id} src={src} />
  </button>
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
