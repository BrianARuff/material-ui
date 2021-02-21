import * as React from 'react';
import { useState } from 'react';

const useInitializePage = () => {

  type Theme = {
    dark: boolean,
    light: boolean,
    darkTheme: {
      backgroundColor: string,
      color: string
    },
    lightTheme: {
      backgroundColor: string,
      color: string
    }
  }

  const [theme, setTheme] = useState<Theme>({
    dark: false,
    light: true,
    darkTheme: {
      backgroundColor: "#115293",
      color: "#fff"
    },
    lightTheme: {
      backgroundColor: "#f8f8f1",
      color: "#000"
    }
  })

  const handleSetTheme = () => {
    setTheme({...theme, dark: !theme.dark, light: !theme.light})
  }

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

  const names: string[] = formValues.customerName.split(', ');
  const breads: string[] = formValues.breadType.split(', ');
  const loaves: string[] = formValues.loavesType.split(', ');

  const [pans, setPans] = useState<number>(() => 0);
  const [rounds, setRounds] = useState<number>(() => 0);

  type DailyBreads = {
    sourdough: boolean;
    wholeGrain: boolean;
    banana: boolean;
  };

  const [dailyBreadTypes, setdailyBreadTypes] = useState<DailyBreads>(() => ({
    sourdough: true,
    wholeGrain: true,
    banana: true,
  }));

  type OptimizationReport = {
    error: boolean;
    reports: [];
    pans: boolean;
    rounds: boolean;
  };
  const [optimizationReport, setoptimizationReport] = useState<OptimizationReport>(() => ({
    error: false,
    reports: [],
    pans: false,
    rounds: false,
  }));

  const handleFormInputChange = (_event: React.BaseSyntheticEvent): void => {
    setFormValues({
      ...formValues,
      [_event.target.name]: _event.target.value
    })
  }

  const handleCheckboxChange = (_event: React.BaseSyntheticEvent): void => {
    setdailyBreadTypes({ ...dailyBreadTypes, [_event.target.name]: _event.target.checked });
  };

  const handleSubmit = (): void => {
    loaves.forEach((loaf: string) => {
      if (loaf.replace(' ', '').includes('pan')) {
        setPans((p) => p + 1);
      } else if (loaf.replace(' ', '').includes('round')) {
        setRounds((r) => r + 1);
      }
    });

    breads.forEach((bread: string, index: number) => {
      let newReports = optimizationReport.reports;
      if (bread === 'whole grain' && !dailyBreadTypes.wholeGrain) {
        newReports.push([names[index], loaves[index], bread]);
        setoptimizationReport(() => ({ ...optimizationReport, error: true, reports: newReports }));
      } else if (bread === 'sourdough' && !dailyBreadTypes.sourdough) {
        newReports.push([names[index], loaves[index], bread]);
        setoptimizationReport(() => ({ ...optimizationReport, error: true, reports: newReports }));
      } else if (bread === 'banana' && !dailyBreadTypes.banana) {
        newReports.push([names[index], loaves[index], bread]);
        setoptimizationReport(() => ({ ...optimizationReport, error: true, reports: newReports }));
      }
    });

    if (pans > rounds) {
      setoptimizationReport(() => ({ ...optimizationReport, pans: true, rounds: false }));
    } else if (rounds > pans) {
      setoptimizationReport(() => ({ ...optimizationReport, pans: true, rounds: false }));
    } else if (pans === rounds && pans !== 0 && rounds !== 0) {
      setoptimizationReport(() => ({ ...optimizationReport, pans: true, rounds: false }));
    }
  };

  

  const clearReport = (): void => {
    setPans(0);
    setRounds(0);
    setoptimizationReport(() => ({
      ...optimizationReport,
      error: false,
      reports: [],
      pans: false,
      rounds: false,
    }));
  };

  return {
    theme,
    optimizationReport,
    dailyBreadTypes,
    names,
    breads,
    loaves,
    pans,
    rounds,
    formValues,
    handleSetTheme,
    setFormValues,
    handleCheckboxChange,
    handleFormInputChange,
    handleSubmit,
    clearReport
  }
};

export default useInitializePage