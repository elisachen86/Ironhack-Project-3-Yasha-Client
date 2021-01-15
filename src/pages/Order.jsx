import React, {useContext,useState, useEffect} from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "../components/Stepper";
import "../styles/orders.css";
import NavOrder from "../components/NavOrder";
import CardOrderStatus from "../components/CardOrderStatus";
import OrderMessage from "../components/OrderMessage";
import {UserContext} from "../components/Auth/UserContext"
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

   const [order,setOrder] = useState(null)
   const [count,setCount] = useState(0)
   

// use effect with [] is the equivalent of componentDidMount
    useEffect(() => {


//api call    
    //    setOrder(data)
// set some state
    }, [])


//fdoieajfiajfiaojfaoifjiaofaefefeifjaiefioa

    

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

export default Order;
