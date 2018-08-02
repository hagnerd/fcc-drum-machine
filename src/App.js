import React from "react";
import styled from "react-emotion";

import DrumMachine from "./components/drum-machine";
import Display from "./components/display";
import Title from "./components/title";
import Footer from "./components/footer";
import { DrumPads } from "./components/drum-pad";
import "./globalStyles";

import Pads from "./data";

const Machine = styled("div")`
  display: grid;
  height: 100%;

  @media (max-width: 420px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    grid-template-rows: repeat(6, minmax(25px, 1fr));
    width: 100%;
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    grid-template-rows: repeat(6, minmax(125px, 1fr));
    margin: auto;
    width: 80%;
  }
`;

const App = () => (
  <DrumMachine
    pads={Pads}
    render={({ currentName, handleClick }) => (
      <Machine id="drum-machine">
        <Title />
        <Display text={currentName} />
        <DrumPads triggerSound={handleClick} />
        <Footer />
      </Machine>
    )}
  />
);

export default App;
