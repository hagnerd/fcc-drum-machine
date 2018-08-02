import React from "react";
import PropTypes from "prop-types";
import { filterById, filterByKeyCode, findAndPlaySound } from "../utils/";

export default class DrumMachine extends React.Component {
  state = { currentName: "" };

  static propTypes = {
    // the list of pads for the drum machine
    pads: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        src: PropTypes.string,
        name: PropTypes.string,
        keyCode: PropTypes.number
      })
    ),
    // The render prop
    render: PropTypes.func
  };

  handleClick = id => {
    const sound = filterById(this.props.pads, id);
    if (sound.length > 0) {
      this.triggerSound(sound[0]);
    }
  };

  handleKeyDown = event => {
    const sound = filterByKeyCode(this.props.pads, event.keyCode);
    if (sound.length > 0) {
      this.triggerSound(sound[0]);
    }
  };

  triggerSound = pad => {
    findAndPlaySound(pad);

    this.setState({
      currentId: pad.id,
      currentName: pad.name,
      currentSrc: pad.src
    });
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const { currentName } = this.state;
    const { handleClick } = this;
    return this.props.render({
      currentName,
      handleClick
    });
  }
}
