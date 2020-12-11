import React, { Component } from "react";
import CountDown from "../CountDown/CountDown.index";
import MinuteSlider from "../MinuteSlider/MinuteSlider.index";
import "./Timer.styles.scss";

export default class Timer extends Component {
  render() {
    return (
      <div className="mainWrapper">
        <MinuteSlider />
        <CountDown />
      </div>
    );
  }
}
