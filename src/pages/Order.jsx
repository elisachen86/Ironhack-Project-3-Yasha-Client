import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line
import { useRouteMatch } from "react-router-dom";
import "../styles/orders.css";

import apiHandler from "../api/apiHandler";
import StepperTracking from "../components/StepperTracking";
import NavOrder from "../components/NavOrder";
import CardOrderStatus from "../components/CardOrderStatus";
import OrderMessage from "../components/OrderMessage";
import OrderComment from "../components/OrderComment";

import Loading from "../components/Loading";
import { UserContext } from "../components/Auth/UserContext";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// eslint-disable-next-line
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Order = (props) => {
  const classes = useStyles();
  useContext(UserContext);

  const [order, setOrder] = useState(null);
  // eslint-disable-next-line
  const [count, setCount] = useState(0);

  useEffect(() => {
    apiHandler
      .getOneOrder(props.match.params.id) // this.props
      .then((apiRes) => setOrder(apiRes))
      .catch();
  }, []);

  // console.log("Order.jsx - props",props);
  // console.log("Order.jsx - props.match.params.id", props.match.params.id);
  console.log("Order.jsx - order", order);

  return order !== null ? (
    <div>
      <NavOrder order={order} img=""></NavOrder>

      <div className={classes.root}>
        <StepperTracking
          currentStep={order[0].steps[order[0].steps.length - 1].stage}
        ></StepperTracking>
        <CardOrderStatus order={order}></CardOrderStatus>

        {order[0].steps[order[0].steps.length - 1].stage === "received" && (
          <Typography component="h1" variant="h5">
            {/* Order completed */}
          </Typography>
        )}

        <Link exact to={`/order/edit/${props.match.params.id}`}>
          {order[0].steps[order[0].steps.length - 1].stage === "submitted" && (
            <Button color="Secondary" variant="contained">
              Mark order as shipped
            </Button>
          )}

          {order[0].steps[order[0].steps.length - 1].stage === "shipped" && (
            <Button color="Secondary" variant="contained">
              Mark order as received
            </Button>
          )}
        </Link>

        <Typography variant="h5">Download order documents</Typography>
        {order[0].documents &&
          order[0].documents.map((document) => {
            return (
              <Typography variant="body1">
                <a href={document.docUrl} target="_blank">
                  {document.docName}
                </a>
              </Typography>
            );
          })}

        {order[0].comments.map((arr) => (
          <OrderMessage messages={arr}></OrderMessage>
        ))}

        <OrderComment order={order[0]}></OrderComment>
      </div>
    </div>
  ) : (
    <Loading></Loading>
  );
};

export default Order;
