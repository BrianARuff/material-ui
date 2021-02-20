import * as React from 'react';
import {
  Container,
  Typography,
  FormControl,
  Button,
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
  ListItemText,
} from '@material-ui/core';
import useSetState from '../components/useSetState';

export default function Index() {
  const {
    optimizationReport,
    rounds,
    pans,
    dailyBreadTypes,
    formValues,
    handleCheckboxChange,
    handleFormInputChange,
    handleSubmit,
    clearReport,
  } = useSetState();
  return (
    <Container>
      <Grid
        style={{ height: '100vh' }}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        wrap="nowrap"
      >
        <Grid item style={{ width: '50%' }} sx={{ my: 2 }}>
          {optimizationReport.error ? (
            <List>
              <ListSubheader>Problem Orders</ListSubheader>
              {optimizationReport.reports.map((report) => {
                return (
                  <ListItem key={'_' + Math.random().toString(36).substr(2, 9)}>
                    <ListItemText>
                      <Alert severity="error">
                        Call {report[0]} to sort out their order as you are not serving {report[2]}{' '}
                        bread today.
                      </Alert>
                    </ListItemText>
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <>
              <List style={{ flex: '0 0 1fr', margin: '0', padding: '0' }}>
                <ListSubheader>Report</ListSubheader>
                <ListItem>
                  <ListItemText>{rounds + ' '}customers want round loaves for today</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>{pans + ' '} customers want pans loaves for today</ListItemText>
                </ListItem>
              </List>
              <List>
                {pans > rounds ? (
                  <ListItem>
                    <ListItemText>Bake {pans + rounds} pan loaves today</ListItemText>
                  </ListItem>
                ) : rounds > pans ? (
                  <ListItem>
                    <ListItemText>Bake {rounds + pans} round loaves today</ListItemText>
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
        <Grid item style={{ width: '50%' }} sx={{ my: 2 }}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Select Daily Breads</FormLabel>
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
            <FormHelperText>
              Select the breads you intend on making for today&apos;s operations.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid style={{ width: '50%' }} sx={{ my: 2 }} item>
          <Typography variant="h3">Customer Information</Typography>
          <FormControl>
            <Grid
              style={{ display: 'flex', flexWrap: 'wrap', width: 'contain-content' }}
              sx={{ my: 1 }}
              item
            >
              <TextField
                style={{ flex: '0 0 100%' }}
                sx={{ my: 1 }}
                id="customer-name"
                name="customerName"
                label="Customer Names"
                type="text"
                value={formValues.customerName}
                onChange={handleFormInputChange}
              />
              <TextField
                style={{ flex: '0 0 100%' }}
                sx={{ my: 1 }}
                id="customer-loaves"
                name="loavesType"
                label="pan or round?"
                type="text"
                value={formValues.loavesType}
                onChange={handleFormInputChange}
              />
              <TextField
                style={{ flex: '0 0 100%' }}
                sx={{ my: 1 }}
                id="customer-bread"
                name="breadType"
                label="banana, sourdough, or whole grain?"
                type="text"
                value={formValues.breadType}
                onChange={handleFormInputChange}
              />
              <FormHelperText>
                Valid Values include: <strong>sourdough</strong>, <strong>whole grain</strong>, and{' '}
                <strong>banana</strong> for types of loaves
              </FormHelperText>
            </Grid>
            <FormHelperText>Enter data as a comma separated list</FormHelperText>
          </FormControl>
        </Grid>
        <Button
          onClick={handleSubmit}
          style={{ width: '50%', height: '50px' }}
          sx={{ my: 4 }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Add Orders
        </Button>
        <Button
          onClick={clearReport}
          style={{ width: '50%', height: '50px' }}
          sx={{ my: 1 }}
          variant="contained"
          color="secondary"
          type="submit"
        >
          Clear Orders
        </Button>
      </Grid>
    </Container>
  );
}
