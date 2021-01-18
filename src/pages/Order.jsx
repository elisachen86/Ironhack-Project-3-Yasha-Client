import React, { useContext, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "../components/Stepper";
import "../styles/orders.css";
import NavOrder from "../components/NavOrder";
import CardOrderStatus from "../components/CardOrderStatus";
import OrderMessage from "../components/OrderMessage";
// eslint-disable-next-line
import Grid from "@material-ui/core/Grid";
import { UserContext } from "../components/Auth/UserContext";
// eslint-disable-next-line
import { useRouteMatch } from "react-router-dom";
import apiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Order = (props) => {
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
    // use History / Location / routerMatch (exported by react router dom)
    apiHandler
      .getOneOrder(props.match.params.id) // this.props
      .then((apiRes) => setOrder(apiRes))
      .catch();
  }, []);

  // console.log("these are the props",props);
  // console.log("route match", props.match.params.id);
   console.log("ORDER", order);

  return (
    <div>
      <NavOrder img="" text="Maison Colibri"></NavOrder>
      <div className={classes.root}>
        <Stepper></Stepper>
        <CardOrderStatus order={order}></CardOrderStatus>

        {/* { order[0].steps[order[0].steps.length - 1].stage === "submitted"  
          && <Button color="Secondary" variant="contained">
          Confirm your order
        </Button>
        } */}


        {/* {  order.steps[order.steps.length - 1].stage === "shipped" && */}
              {/* <Link exact to={`/order/edit/${props.match.params.id}`}>
                <Button color="Secondary" variant="contained">
                  Mark order as shipped
                </Button>
              </Link> */}
            {/* } */}

       
              <Link exact to={`/order/edit/${props.match.params.id}`}>
                 
                <Button color="Secondary" variant="contained">
                  Mark order as shipped
                </Button>
                  
                  
                <Button color="Secondary" variant="contained">
                  Mark order as received
                </Button>
                  
              </Link>
        
        
        <OrderMessage></OrderMessage>
        <OrderMessage></OrderMessage>
      </div>
    </div>
  );
};

export default Order;
