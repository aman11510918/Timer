import React, { Component } from "react";
import "./CountDown.styles.scss";
import { IconButton } from "@material-ui/core";
import start_Watch from "../../utils/images/startStopWatch.png";
import stop_Watch from "../../utils/images/stopStopWatch.png";
import reset_Watch from "../../utils/images/resetWatch.png";

export default class CountDown extends Component {
  state = {
    isVisible: true,
    isDisable: true,
  };
  handleStart = () => {
    this.setState({ isVisible: !this.state.isVisible });
    this.setState({ isDisable: false });
  };
  handleStop = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  handleReset = () => {
    this.setState({ isVisible: true });
    this.setState({ isDisable: !this.state.isDisable });
  };
  render() {
    const { isVisible, isDisable } = this.state;
    return (
      <div>
        {isVisible ? (
          <IconButton
            aria-label="delete"
            className="controlButton"
            onClick={this.handleStart}
          >
            <img src={start_Watch} alt="Start" className="watchImg" />
          </IconButton>
        ) : (
          <IconButton
            aria-label="delete"
            className="controlButton"
            onClick={this.handleStop}
          >
            <img src={stop_Watch} alt="Stop" className="watchImg" />
          </IconButton>
        )}
        <IconButton
          aria-label="delete"
          className="controlButton controlButton_reset"
          onClick={this.handleReset}
          disabled={isDisable}
        >
          <img src={reset_Watch} alt="Reset" className="watchImg resetImg" />
        </IconButton>
      </div>
    );
  }
}
