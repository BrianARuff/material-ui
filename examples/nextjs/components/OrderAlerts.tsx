import * as React from "react";
import { Grid, Alert, List, ListItem, ListSubheader } from "@material-ui/core";
const OrderAlerts = (props) => {
  return (
    <Grid item style={{ width: "100%" }} sx={{ my: 2 }}>
      {props.optimizationReport.error ? (
        <List>
          <ListSubheader
            style={{
              flex: "0 0 100%",
              color: props.theme.dark ? props.theme.darkTheme.color : props.theme.lightTheme.color,
              backgroundColor: props.theme.dark
                ? props.theme.darkTheme.backgroundColor
                : props.theme.lightTheme.backgroundColor,
            }}
          >
            Problem Orders
          </ListSubheader>
          {props.optimizationReport.reports.map((report) => {
            return (
              <ListItem key={"_" + Math.random().toString(36).substr(2, 9)}>
                <Alert severity="error">
                  Call {report[0]} to sort out their order as you are not serving {report[2]} bread
                  today.
                </Alert>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <>
          <List>
            {props.pans || props.rounds ? (
              <ListItem>
                <Alert severity="success">
                  Bake {props.pans} pan loaves and {props.rounds} round loaves today
                </Alert>
              </ListItem>
            ) : props.pans === props.rounds && props.pans !== 0 && props.rounds !== 0 ? (
              <Alert severity="error">
                An equal number of customers want pan and round loaves. You will have to call each
                customer and figure out a custom solution
              </Alert>
            ) : null}
          </List>
        </>
      )}
    </Grid>
  );
};

export default OrderAlerts;
