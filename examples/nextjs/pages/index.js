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
} from '@material-ui/core';
import { useState } from 'react';
import { letterSpacing } from '@material-ui/system';

export default function Index() {
  const [formValues, setFormValues] = useState({ customerName: '', loavesType: '', breadType: '' });
  let { customerName: names, loavesType: loaves, breadType: breads } = formValues;
  names = names.split(', ');
  breads = breads.split(', ');
  loaves = loaves.split(', ');

  const [pans, setPans] = useState(0);
  const [rounds, setRounds] = useState(0);

  const [dailyBreadTypes, setdailyBreadTypes] = useState({
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
    setPans(0);
    setRounds(0);
    setoptimizationReport({ error: false, reports: [] });

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
            <ul>
              <h4 style={{ fontSize: '1rem' }}>Problem Orders</h4>
              {optimizationReport.reports.map((report) => {
                return (
                  <li key={'_' + Math.random().toString(36).substr(2, 9)}>
                    <strong>
                      {report[0]}-{report[1]}-{report[2]}
                    </strong>
                    <p style={{ color: 'tomato' }}>
                      Call {report[0]} to sort out their order as you are not serving {report[2]}{' '}
                      bread today.
                    </p>
                  </li>
                );
              })}
            </ul>
          ) : (
            <>
              <ul style={{ flex: '0 0 1fr', margin: '0', padding: '0' }}>
                <h4>Report</h4>
                <li>
                  <strong>{rounds}</strong> customers want rounds for today
                </li>
                <li>
                  <strong>{pans}</strong> customers want pans for today
                </li>
              </ul>
              <ul>
                {pans > rounds ? (
                  <li>Bake {pans + rounds} pan loaves today</li>
                ) : rounds > pans ? (
                  <li>Bake {rounds + pans} round loaves today</li>
                ) : pans === rounds && pans !== 0 && rounds !== 0 ? (
                  <li style={{ color: 'tomato' }}>
                    An equal number of customers want pan and round loaves. You will have to call
                    each customer and figure out a custom solution
                  </li>
                ) : null}
              </ul>
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
