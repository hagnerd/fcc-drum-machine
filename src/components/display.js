import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

const Bg = styled("div")`
  background-color: #bbefc9;
  box-shadow: inset 3px 3px 3px #8be09f;
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
