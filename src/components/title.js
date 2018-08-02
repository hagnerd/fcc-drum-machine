import React from "react";
import styled from "react-emotion";

const T = styled("h1")`
  color: #f89d80;
  margin: auto;
  grid-row-start: span 1;
  grid-column-start: span 3;
`;

const Title = () => <T>FCC DRUM MACHINE</T>;

export default Title;
