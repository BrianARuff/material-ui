import * as React from "react";
import { Container, Button, Grid } from "@material-ui/core";
import useInitializePage from "../components/useInitializePage";
import OrderSummary from "../components/OrderSummary";
import CheckBreadBoxes from "../components/CheckBreadBoxes";
import OrderAlerts from "../components/OrderAlerts";
import CustomerDataForm from "../components/CustomerDataForm";
import SubmitOrClearOrder from "../components/SubmitOrClearOrder";

const Index: React.FC = () => {
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
        flex: "0 0 100%",
        minHeight: "100vh",
        color: theme.dark ? theme.darkTheme.color : theme.lightTheme.color,
        backgroundColor: theme.dark
          ? theme.darkTheme.backgroundColor
          : theme.lightTheme.backgroundColor,
      }}
    >
      <Grid
        container
        style={{ height: "fit-content" }}
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
          {theme.dark ? "Set Theme to Light Mode" : "Set Theme to Dark Mode"}
        </Button>
        <OrderAlerts
          optimizationReport={optimizationReport}
          theme={theme}
          pans={pans}
          rounds={rounds}
        />
        props
        <CheckBreadBoxes
          theme={theme}
          dailyBreadTypes={dailyBreadTypes}
          handleCheckboxChange={handleCheckboxChange}
        />
        <CustomerDataForm
          theme={theme}
          formValues={formValues}
          handleFormInputChange={handleFormInputChange}
        />
        <SubmitOrClearOrder
          optimizationReport={optimizationReport}
          clearReport={clearReport}
          handleSubmit={handleSubmit}
        />
        <OrderSummary optimizationReport={optimizationReport} />
      </Grid>
    </Container>
  );
};

export default Index;
