import React from "react";

import DrumMachine from "./components/drum-machine";
import Display from "./components/display";
import Title from "./components/title";
import Footer from "./components/footer";
import { DrumPads } from "./components/drum-pad";

import Pads from "./data";

const App = () => (
  <DrumMachine
    pads={Pads}
    render={({ currentName, handleClick }) => (
      <div id="drum-machine">
        <Title />
        <Display text={currentName} />
        <DrumPads triggerSound={handleClick} />
        <Footer />
      </div>
    )}
  />
);

export default App;
