import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "../components/Stepper";
import "../styles/orders.css";
import NavOrder from "../components/NavOrder";
import CardOrderStatus from "../components/CardOrderStatus";
import OrderMessage from "../components/OrderMessage";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Orders = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavOrder img="" text="Maison Colibri"></NavOrder>
      <Stepper></Stepper>
      <CardOrderStatus></CardOrderStatus>
      <Button variant="contained">Move to next step</Button>
      <OrderMessage></OrderMessage>
      <OrderMessage></OrderMessage>
    </div>
  );
};

export default Orders;
