import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

const Bg = styled("div")`
  background-color: #bbefc9;
  box-shadow: inset 3px 3px 3px #8be09f;
  @media (max-width: 420px) {
    grid-column-start: span 3;
  }
  @media (min-width: 800px) {
    grid-column-start: span 3;
  }
  grid-row-start: span 1;
`;

const H3 = styled("h3")`
  color: #85a399;
  text-transform: uppercase;
  padding: 10px 20px;
`;

const Display = ({ text }) => (
  <Bg id="display">
    <H3>{text}</H3>
  </Bg>
);

Display.propTypes = {
  text: PropTypes.string.isRequired
};

export default Display;
