import * as React from "react";
import {
  Typography,
  FormControl,
  Grid,
  TextField,
  FormHelperText,
  ListSubheader,
} from "@material-ui/core";

const CustomerDataForm = (props) => {
  return (
    <Grid
      item
      style={{
        width: "100%",
        backgroundColor: props.theme.dark
          ? props.theme.darkTheme.backgroundColor
          : props.theme.lightTheme.backgroundColor,
      }}
      sx={{ my: 2 }}
    >
      <ListSubheader>
        <Typography
          style={{
            color: props.theme.dark ? props.theme.darkTheme.color : props.theme.lightTheme.color,
            backgroundColor: props.theme.dark
              ? props.theme.darkTheme.backgroundColor
              : props.theme.lightTheme.backgroundColor,
          }}
          variant="h3"
        >
          Customer Information
        </Typography>
      </ListSubheader>
      <FormControl>
        <Grid
          style={{ display: "flex", flexWrap: "wrap", width: "contain-content" }}
          sx={{ my: 1 }}
          item
        >
          <TextField
            style={{
              flex: "0 0 100%",
              color: props.theme.dark ? props.theme.darkTheme.color : props.theme.lightTheme.color,
              backgroundColor: props.theme.lightTheme.backgroundColor,
            }}
            sx={{ my: 1 }}
            id="customer-name"
            name="customerName"
            label="Customer Names"
            type="text"
            value={props.formValues.customerName}
            onChange={props.handleFormInputChange}
          />
          <TextField
            style={{
              flex: "0 0 100%",
              color: props.theme.dark ? props.theme.darkTheme.color : props.theme.lightTheme.color,
              backgroundColor: props.theme.lightTheme.backgroundColor,
            }}
            sx={{ my: 1 }}
            id="customer-loaves"
            name="loavesType"
            label="pan or round?"
            type="text"
            value={props.formValues.loavesType}
            onChange={props.handleFormInputChange}
          />
          <TextField
            style={{
              flex: "0 0 100%",
              color: props.theme.dark ? props.theme.darkTheme.color : props.theme.lightTheme.color,
              backgroundColor: props.theme.lightTheme.backgroundColor,
            }}
            sx={{ my: 1 }}
            id="customer-bread"
            name="breadType"
            label="banana, sourdough, or whole grain?"
            type="text"
            value={props.formValues.breadType}
            onChange={props.handleFormInputChange}
          />
          <FormHelperText
            style={{
              flex: "0 0 100%",
              color: props.theme.dark ? props.theme.darkTheme.color : props.theme.lightTheme.color,
              backgroundColor: props.theme.dark
                ? props.theme.darkTheme.backgroundColor
                : props.theme.lightTheme.backgroundColor,
            }}
          >
            Valid Values include: <strong>sourdough</strong>, <strong>whole grain</strong>, and{" "}
            <strong>banana</strong> for types of loaves
          </FormHelperText>
        </Grid>
        <FormHelperText
          style={{
            flex: "0 0 100%",
            color: props.theme.dark ? props.theme.darkTheme.color : props.theme.lightTheme.color,
            backgroundColor: props.theme.dark
              ? props.theme.darkTheme.backgroundColor
              : props.theme.lightTheme.backgroundColor,
          }}
        >
          Enter data as a comma separated list
        </FormHelperText>
      </FormControl>
    </Grid>
  );
};

export default CustomerDataForm;
