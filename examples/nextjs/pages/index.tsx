import * as React from 'react';
import {
  Container,
  Typography,
  FormControl,
  Button,
  ButtonGroup,
  Grid,
  TextField,
  FormHelperText,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormLabel,
  Alert,
  List,
  ListItem,
  ListSubheader,
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
} from '@material-ui/core';
import useInitializePage from '../components/useInitializePage';
import Image from 'next/image';

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

const Index: React.FC = () => {
  const classes = useStyles();
  const {
    theme,
    optimizationReport,
    rounds,
    pans,
    dailyBreadTypes,
    formValues,
    handleSetTheme,
    handleCheckboxChange,
    handleFormInputChange,
    handleSubmit,
    clearReport,
  } = useInitializePage();
  return (
    <Container
      style={{
        flex: '0 0 100%',
        minHeight: '100vh',
        color: theme.dark ? theme.darkTheme.color : theme.lightTheme.color,
        backgroundColor: theme.dark
          ? theme.darkTheme.backgroundColor
          : theme.lightTheme.backgroundColor,
      }}
    >
      <Grid
        container
        style={{ height: 'fit-content' }}
        sx={{ py: 4 }}
        direction="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        wrap="nowrap"
      >
        <Button
          style={{
            color: theme.dark ? theme.lightTheme.color : theme.darkTheme.color,
            backgroundColor: theme.dark
              ? theme.lightTheme.backgroundColor
              : theme.darkTheme.backgroundColor,
          }}
          onClick={handleSetTheme}
          variant="outlined"
        >
          {theme.dark ? 'Set Theme to Light Mode' : 'Set Theme to Dark Mode'}
        </Button>
        <Grid item style={{ width: '100%' }} sx={{ my: 2 }}>
          {optimizationReport.error ? (
            <List>
              <ListSubheader
                style={{
                  flex: '0 0 100%',
                  color: theme.dark ? theme.darkTheme.color : theme.lightTheme.color,
                  backgroundColor: theme.dark
                    ? theme.darkTheme.backgroundColor
                    : theme.lightTheme.backgroundColor,
                }}
              >
                Problem Orders
              </ListSubheader>
              {optimizationReport.reports.map((report) => {
                return (
                  <ListItem key={'_' + Math.random().toString(36).substr(2, 9)}>
                    <Alert severity="error">
                      Call {report[0]} to sort out their order as you are not serving {report[2]}{' '}
                      bread today.
                    </Alert>
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <>
              <List>
                {pans || rounds ? (
                  <ListItem>
                    <Alert severity="success">
                      Bake {pans} pan loaves and {rounds} round loaves today
                    </Alert>
                  </ListItem>
                ) : pans === rounds && pans !== 0 && rounds !== 0 ? (
                  <Alert severity="error">
                    An equal number of customers want pan and round loaves. You will have to call
                    each customer and figure out a custom solution
                  </Alert>
                ) : null}
              </List>
            </>
          )}
        </Grid>
        <Grid item style={{ width: '100%' }} sx={{ my: 2 }}>
          <FormControl>
            <FormLabel
              style={{
                color: theme.dark ? theme.darkTheme.color : theme.lightTheme.color,
                backgroundColor: theme.dark
                  ? theme.darkTheme.backgroundColor
                  : theme.lightTheme.backgroundColor,
              }}
            >
              Select Daily Breads
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={dailyBreadTypes.sourdough}
                    onChange={handleCheckboxChange}
                    name="sourdough"
                  />
                }
                label="Sourdough Bread"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={dailyBreadTypes.wholeGrain}
                    onChange={handleCheckboxChange}
                    name="wholeGrain"
                  />
                }
                label="Whole Grain Bread"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={dailyBreadTypes.banana}
                    onChange={handleCheckboxChange}
                    name="banana"
                  />
                }
                label="Banana Bread"
              />
            </FormGroup>
            <FormHelperText
              style={{
                flex: '0 0 100%',
                color: theme.dark ? theme.darkTheme.color : theme.lightTheme.color,
                backgroundColor: theme.dark
                  ? theme.darkTheme.backgroundColor
                  : theme.lightTheme.backgroundColor,
              }}
            >
              Select the breads you intend on making for today&apos;s operations.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid
          item
          style={{
            width: '100%',
            backgroundColor: theme.dark
              ? theme.darkTheme.backgroundColor
              : theme.lightTheme.backgroundColor,
          }}
          sx={{ my: 2 }}
        >
          <ListSubheader>
            <Typography
              style={{
                color: theme.dark ? theme.darkTheme.color : theme.lightTheme.color,
                backgroundColor: theme.dark
                  ? theme.darkTheme.backgroundColor
                  : theme.lightTheme.backgroundColor,
              }}
              variant="h3"
            >
              Customer Information
            </Typography>
          </ListSubheader>
          <FormControl>
            <Grid
              style={{ display: 'flex', flexWrap: 'wrap', width: 'contain-content' }}
              sx={{ my: 1 }}
              item
            >
              <TextField
                style={{
                  flex: '0 0 100%',
                  color: theme.dark ? theme.darkTheme.color : theme.lightTheme.color,
                  backgroundColor: theme.lightTheme.backgroundColor,
                }}
                sx={{ my: 1 }}
                id="customer-name"
                name="customerName"
                label="Customer Names"
                type="text"
                value={formValues.customerName}
                onChange={handleFormInputChange}
              />
              <TextField
                style={{
                  flex: '0 0 100%',
                  color: theme.dark ? theme.darkTheme.color : theme.lightTheme.color,
                  backgroundColor: theme.lightTheme.backgroundColor,
                }}
                sx={{ my: 1 }}
                id="customer-loaves"
                name="loavesType"
                label="pan or round?"
                type="text"
                value={formValues.loavesType}
                onChange={handleFormInputChange}
              />
              <TextField
                style={{
                  flex: '0 0 100%',
                  color: theme.dark ? theme.darkTheme.color : theme.lightTheme.color,
                  backgroundColor: theme.lightTheme.backgroundColor,
                }}
                sx={{ my: 1 }}
                id="customer-bread"
                name="breadType"
                label="banana, sourdough, or whole grain?"
                type="text"
                value={formValues.breadType}
                onChange={handleFormInputChange}
              />
              <FormHelperText
                style={{
                  flex: '0 0 100%',
                  color: theme.dark ? theme.darkTheme.color : theme.lightTheme.color,
                  backgroundColor: theme.dark
                    ? theme.darkTheme.backgroundColor
                    : theme.lightTheme.backgroundColor,
                }}
              >
                Valid Values include: <strong>sourdough</strong>, <strong>whole grain</strong>, and{' '}
                <strong>banana</strong> for types of loaves
              </FormHelperText>
            </Grid>
            <FormHelperText
              style={{
                flex: '0 0 100%',
                color: theme.dark ? theme.darkTheme.color : theme.lightTheme.color,
                backgroundColor: theme.dark
                  ? theme.darkTheme.backgroundColor
                  : theme.lightTheme.backgroundColor,
              }}
            >
              Enter data as a comma separated list
            </FormHelperText>
          </FormControl>
        </Grid>
        <ButtonGroup color="primary">
          <Button
            onClick={handleSubmit}
            style={{ width: 'fit-content', height: '3rem' }}
            variant="contained"
            color="primary"
            type="submit"
            disabled={optimizationReport.error}
          >
            Add Orders
          </Button>
          <Button
            onClick={clearReport}
            style={{ width: 'fit-content', height: '3rem', marginLeft: '1rem' }}
            variant="contained"
            color="secondary"
            type="submit"
          >
            Clear Orders
          </Button>
        </ButtonGroup>
        <Grid container>
          {optimizationReport.error === false &&
            optimizationReport.reports.map(([customerName, loafType, breadType]) => {
              return (
                <Card key={'_' + Math.random().toString(36).substr(2, 9)} className={classes.root}>
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
      </Grid>
    </Container>
  );
};

export default Index;
