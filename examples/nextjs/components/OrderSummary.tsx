import * as React from "react";
import { Typography, Grid, Card, CardActionArea, CardContent, makeStyles } from "@material-ui/core";
import Image from "next/image";

const OrderSummary = (props: { optimizationReport: {} }) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginTop: 40,
      marginRight: 20,
      padding: 20,
    },
    media: {
      height: 140,
    },
  });
  const classes = useStyles();
  return (
    <Grid container>
      {props.optimizationReport.error === false &&
        props.optimizationReport.reports.map(([customerName, loafType, breadType]) => {
          return (
            <Card key={"_" + Math.random().toString(36).substr(2, 9)} className={classes.root}>
              <CardActionArea>
                <Image
                  src="/images/bread.png"
                  alt="Picture of bread with smiley face on it"
                  width={345}
                  height={140}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {customerName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {customerName} has ordered {breadType} bread {loafType} loaf.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
    </Grid>
  );
};

export default OrderSummary;
