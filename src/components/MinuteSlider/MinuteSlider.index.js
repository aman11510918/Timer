import React, { useContext } from "react";
import "./MinuteSlider.styles.scss";
import Grid from "@material-ui/core/Grid";
import { Typography, Slider, Input } from "@material-ui/core";
import { MinuteContext } from "../Store/Context";

const MinuteSlider = () => {
  const min = useContext(MinuteContext);

  const [value, setValue] = React.useState(min.minute);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    min.dispatch({ type: "CHANGE_TIME", payload: newValue });
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
    min.dispatch({ type: "CHANGE_TIME", payload: event.target.value });
  };

  const handleBlur = () => {
    if (value < 1) {
      setValue(1);
      min.dispatch({ type: "CHANGE_TIME", payload: 1 });
    } else if (value > 60) {
      setValue(60);
      min.dispatch({ type: "CHANGE_TIME", payload: 60 });
    }
  };

  return (
    <div className="sliderContainer">
      <Typography className="minutesLabel" id="input-slider" gutterBottom>
        Choose atleast 1 second
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? value : 0}
            min={1}
            step={1}
            max={60}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            className="inputContainer"
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 5,
              min: 0,
              max: 60,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default MinuteSlider;
