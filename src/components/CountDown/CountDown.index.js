import React, { useState, useEffect, useContext } from "react";
import "./CountDown.styles.scss";
import { IconButton } from "@material-ui/core";
import start_Watch from "../../utils/images/startStopWatch.png";
import stop_Watch from "../../utils/images/stopStopWatch.png";
// import reset_Watch from "../../utils/images/resetWatch.png";
import { MinuteContext } from "../Store/Context";

const CountDown = () => {
  const min = useContext(MinuteContext);
  const [isVisible, setIsVisible] = useState(true);
  // const [resetDisable, setResetDisable] = useState(true);
  const [stop, setStop] = useState(false);

  const handleStart = () => {
    setIsVisible(!isVisible);
    // setResetDisable(false);
  };

  const handleStop = () => {
    setIsVisible(!isVisible);
  };

  // const handleReset = () => {
  //   setIsVisible(true);
  //   setResetDisable(!resetDisable);
  //   min.dispatch({ type: "CHANGE_TIME", payload: 1 });
  //   setStop(false);
  // };

  const countDown = () => {
    let secondsLeft = min.minute - 1;
    min.dispatch({ type: "CHANGE_TIME", payload: secondsLeft });
  };

  const handletoggle = () => {
    setStop(!stop);
  };

  useEffect(() => {
    if (min.minute === 0 && !isVisible) {
      setIsVisible(!isVisible);
      setStop(!stop);
    }
    let interval = null;
    if (stop && min.minute >= 1) {
      interval = setInterval(() => countDown(), 1000);
    } else if (!stop && min.minute !== 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stop, min.minute]);

  return (
    <div className="countdownContainer">
      <div> Time Left : {min.minute} sec</div>
      <div className="countdownControls">
        {isVisible ? (
          <IconButton
            aria-label="delete"
            className="controlButton"
            onClick={() => {
              handletoggle();
              handleStart();
            }}
          >
            <img src={start_Watch} alt="Start" className="watchImg" />
          </IconButton>
        ) : (
          <IconButton
            aria-label="delete"
            className="controlButton"
            onClick={() => {
              handleStop();
              handletoggle();
            }}
          >
            <img src={stop_Watch} alt="Stop" className="watchImg" />
          </IconButton>
        )}
        {/* <IconButton
          aria-label="delete"
          className="controlButton controlButton_reset"
          onClick={() => handleReset()}
          disabled={resetDisable}
        >
          <img src={reset_Watch} alt="Reset" className="watchImg resetImg" />
        </IconButton> */}
      </div>
    </div>
  );
};

export default CountDown;
