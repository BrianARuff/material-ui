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
import { useState } from 'react';
import { letterSpacing } from '@material-ui/system';

export default function Index() {
  type FormValues = {
    customerName: '';
    loavesType: '';
    breadType: '';
  };

  const [formValues, setFormValues] = useState<FormValues>({
    customerName: '',
    loavesType: '',
    breadType: '',
  });

  const names = formValues.customerName.split(', ');
  const breads = formValues.breadType.split(', ');
  const loaves = formValues.loavesType.split(', ');

  type Pans = {
    pans: number;
  };
  type Rounds = {
    rounds: number;
  };

  const [pans, setPans] = useState<Pans | number>(0);
  const [rounds, setRounds] = useState<Rounds | number>(0);

  type DailyBreads = {
    sourdough: boolean;
    wholeGrain: boolean;
    banana: boolean;
  };

  const [dailyBreadTypes, setdailyBreadTypes] = useState<DailyBreads>({
    sourdough: true,
    wholeGrain: true,
    banana: true,
  });
  const [optimizationReport, setoptimizationReport] = useState({
    error: false,
    reports: [],
    pans: false,
    rounds: false,
  });

  const handleCheckboxChange = (_event) => {
    setdailyBreadTypes({ ...dailyBreadTypes, [_event.target.name]: _event.target.checked });
  };

  const handleSubmit = () => {
    clearReport();

    loaves.forEach((loaf) => {
      if (loaf.replace(' ', '').includes('pan')) {
        setPans((p) => p + 1);
      } else if (loaf.replace(' ', '').includes('round')) {
        setRounds((r) => r + 1);
      }
    });

    breads.forEach((bread, index) => {
      let newReports = optimizationReport.reports;
      if (bread === 'whole grain' && !dailyBreadTypes.wholeGrain) {
        newReports.push([names[index], loaves[index], bread]);
        setoptimizationReport({ ...optimizationReport, error: true, reports: newReports });
      } else if (bread === 'sourdough' && !dailyBreadTypes.sourdough) {
        newReports.push([names[index], loaves[index], bread]);
        setoptimizationReport({ ...optimizationReport, error: true, reports: newReports });
      } else if (bread === 'banana' && !dailyBreadTypes.banana) {
        newReports.push([names[index], loaves[index], bread]);
        setoptimizationReport({ ...optimizationReport, error: true, reports: newReports });
      }
    });

    if (pans > rounds) {
      setoptimizationReport({ ...optimizationReport, pans: true, rounds: false });
    } else if (rounds > pans) {
      setoptimizationReport({ ...optimizationReport, rounds: true, pans: false });
    } else if (pans === rounds && pans !== 0 && rounds !== 0) {
      setoptimizationReport({ ...optimizationReport, pans: false, rounds: false });
    }
  };

  const handleFormInputChange = (_event) => {
    const { name, value } = _event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const clearReport = () => {
    setPans(0);
    setRounds(0);
    setoptimizationReport({
      ...optimizationReport,
      error: false,
      reports: [],
      pans: false,
      rounds: false,
    });
  };

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
