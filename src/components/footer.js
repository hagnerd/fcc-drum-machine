import React from "react";
import styled from "react-emotion";

const F = styled("div")`
  grid-column-start: span 3;
  grid-row-start: span 1;
  text-align: center;
`;

const P = styled("p")`
  color: #304655;
  padding: 15px 20px;
`;

const Footer = () => (
  <F id="footer">
    <P>Made and Designed by Matt Hagner</P>
  </F>
);

export default Footer;
