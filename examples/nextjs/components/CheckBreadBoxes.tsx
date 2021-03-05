import * as React from "react";
import {
  FormControl,
  Grid,
  FormHelperText,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormLabel,
} from "@material-ui/core";

const CheckBreadBoxes = (props) => {
  return (
    <Grid item style={{ width: "100%" }} sx={{ my: 2 }}>
      <FormControl>
        <FormLabel
          style={{
            color: props.theme.dark ? props.theme.darkTheme.color : props.theme.lightTheme.color,
            backgroundColor: props.theme.dark
              ? props.theme.darkTheme.backgroundColor
              : props.theme.lightTheme.backgroundColor,
          }}
        >
          Select Daily Breads
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.dailyBreadTypes.sourdough}
                onChange={props.handleCheckboxChange}
                name="sourdough"
              />
            }
            label="Sourdough Bread"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.dailyBreadTypes.wholeGrain}
                onChange={props.handleCheckboxChange}
                name="wholeGrain"
              />
            }
            label="Whole Grain Bread"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.dailyBreadTypes.banana}
                onChange={props.handleCheckboxChange}
                name="banana"
              />
            }
            label="Banana Bread"
          />
        </FormGroup>
        <FormHelperText
          style={{
            flex: "0 0 100%",
            color: props.theme.dark ? props.theme.darkTheme.color : props.theme.lightTheme.color,
            backgroundColor: props.theme.dark
              ? props.theme.darkTheme.backgroundColor
              : props.theme.lightTheme.backgroundColor,
          }}
        >
          Select the breads you intend on making for today&apos;s operations.
        </FormHelperText>
      </FormControl>
    </Grid>
  );
};

export default CheckBreadBoxes;
