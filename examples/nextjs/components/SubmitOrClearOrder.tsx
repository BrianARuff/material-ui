import { Container, Button, ButtonGroup, Grid } from "@material-ui/core";

const SubmitOrClearOrder = (props) => {
  return (
    <ButtonGroup color="primary">
      <Button
        onClick={props.handleSubmit}
        style={{ width: "fit-content", height: "3rem" }}
        variant="contained"
        color="primary"
        type="submit"
        disabled={props.optimizationReport.error}
      >
        Add Orders
      </Button>
      <Button
        onClick={props.clearReport}
        style={{ width: "fit-content", height: "3rem", marginLeft: "1rem" }}
        variant="contained"
        color="secondary"
        type="submit"
      >
        Clear Orders
      </Button>
    </ButtonGroup>
  );
};

export default SubmitOrClearOrder;
