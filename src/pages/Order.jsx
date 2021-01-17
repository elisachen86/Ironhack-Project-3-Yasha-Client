import React, { useContext, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "../components/Stepper";
import "../styles/orders.css";
import NavOrder from "../components/NavOrder";
import CardOrderStatus from "../components/CardOrderStatus";
import OrderMessage from "../components/OrderMessage";
import Grid from "@material-ui/core/Grid";
import { UserContext } from "../components/Auth/UserContext";
import apiHandler from "../api/apiHandler";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Order = () => {
  const classes = useStyles();
  const myContextValue = useContext(UserContext);

  // state= {
  //   count: 0,
  //   order: null
  // }

  const [order, setOrder] = useState(null);
  const [count, setCount] = useState(0);

  // use effect with [] is the equivalent of componentDidMount
  useEffect(() => {
    // apiHandler.getOneOrder(req.params.id);
    //api call
    //    setOrder(data)
    // set some state
  }, []);

  return (
    <div>
      <NavOrder img="" text="Maison Colibri"></NavOrder>
      <div className={classes.root}>
        <Stepper></Stepper>
        <CardOrderStatus></CardOrderStatus>
        <Button color="Secondary" variant="contained">
          Move to next step
        </Button>
        <OrderMessage></OrderMessage>
        <OrderMessage></OrderMessage>
      </div>
    </div>
  );
};

export default Order;
