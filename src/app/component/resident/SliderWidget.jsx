import { React, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import { FaTemperatureHigh } from "react-icons/fa";

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function SliderWidget() {
  const [value, setValue] = useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography
        id="input-slider"
        gutterBottom
        style={{ paddingBottom: "10px", fontSize: "20px" }}
      >
        Temperature Control
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <FaTemperatureHigh />
        </Grid>
        <Grid item xs>
          <Stack sx={{ height: 150 }} spacing={1} direction="row">
            <Slider
              value={typeof value === "number" ? value : 0}
              orientation="vertical"
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Stack>
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="medium"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
