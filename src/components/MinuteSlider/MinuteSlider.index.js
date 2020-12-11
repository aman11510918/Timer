import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, Slider, Input } from "@material-ui/core";
import "./MinuteSlider.styles.scss";

const MinuteSlider = () => {
  const [value, setValue] = React.useState(1);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 1) {
      setValue(1);
    } else if (value > 60) {
      setValue(60);
    }
  };

  return (
    <div className="sliderContainer">
      <Typography className="minutesLabel" id="input-slider" gutterBottom>
        Minutes
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
